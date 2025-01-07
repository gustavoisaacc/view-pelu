import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { filterUsers } from "../api/Search";
import { toast } from "react-toastify";

function Search({ setFilter }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: filterUsers,
    onError: (error) => {
      toast.error(`${error}`);
    },
    onSuccess: (data) => {
      console.log("🚀 ~ Search ~ data:", data);
      setFilter(data);
    },
  });

  const onSubmit = handleSubmit((formData) => {
    const searchValue = formData.search.trim();
    if (!searchValue) {
      toast.info("Por favor ingresa un término de búsqueda");
      return;
    }
    mutate({ search: searchValue });
  });

  return (
    <form
      className="w-full flex items-center justify-center"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="w-full flex-grow border p-2 rounded-tl-lg rounded-bl-lg border-gray-300 outline-none"
        {...register("search", {
          required: "El Nombre de usuario es obligatorio",
        })}
      />
      <button className=" bg-primary text-white p-2 rounded-tr-lg rounded-br-lg">
        Buscar
      </button>
    </form>
  );
}

export default Search;
