import { useForm } from "react-hook-form";

function Search() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = handleSubmit((formData) => {
    console.log("🚀 ~ onSubmit ~ formData:", formData);
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
