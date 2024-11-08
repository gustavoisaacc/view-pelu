import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { upLoadAvatar } from "../../api/ProfileAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type FormValues = {
  image: string;
};

function EditPhotoProfile() {
  const { register, handleSubmit } = useForm<FormValues>();

  const navigate = useNavigate();

  // Mutación para manejar el envío del archivo
  const { mutate, error } = useMutation({
    mutationFn: upLoadAvatar,
    onError: (error) => {
      if (error instanceof Error) {
        console.log("Error al subir la imagen:", error.message);
      }
    },
    onSuccess: (data) => {
      toast.success(data);
      navigate("/dashboard");
    },
  });

  // Envío de formulario y creación de FormData
  const onSubmit = (data: FormValues) => {
    const formData = new FormData();
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
      mutate(formData); // Llama a la mutación para enviar los datos
    }
  };

  return (
    <form
      className="flex flex-col w-full space-y-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="file"
        accept="image/*"
        {...register("image", { required: "La imagen es obligatoria" })}
      />
      <input
        type="submit"
        value="Enviar"
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
      />
      {/* Muestra un mensaje de error si falla la subida */}
      {error && (
        <p className="text-red-500">
          Error al subir la imagen: {(error as Error).message}
        </p>
      )}
    </form>
  );
}

export default EditPhotoProfile;
