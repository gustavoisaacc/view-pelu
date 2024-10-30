import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getCategory } from "../api/CategoryApi";
import { toast } from "react-toastify";

import FormModal from "../components/category/FormModal";
import ListCategori from "../components/category/ListCategori";
import Button from "../components/Button";

function Categories() {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteCategory,
    onError: (data) => {
      toast.error("Error al eliminar la categoria: " + data.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      toast.success(data);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (data)
    return (
      <>
        <Button route="/" className=" inline-block  ml-16 mt-10">
          Volver
        </Button>
        <div className="max-w-screen-xl m-auto p-16">
          <h1 className="my-5">Categorias</h1>
          <Button route="?newCategory=true">Crear Categoria</Button>
        </div>
        {/* Listado de categorias */}

        <div className="max-wmax-w-screen-2xl m-auto px-16">
          <ListCategori data={data} mutate={mutate} />
        </div>

        <FormModal />
      </>
    );
}

export default Categories;
