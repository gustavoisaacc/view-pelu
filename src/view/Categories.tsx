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
        <div className="flex justify-center items-center bg-lightpurple">
          <div className="w-full max-w-4xl">
            <h1 className="text-4xl font-black flex justify-center">CATEGORIAS</h1>
            <div className=" flex justify-around p-8">
              <Button route="/dashboard" className=" bg-primary w-1/5 flex justify-center">
                Volver
              </Button>
              <Button route="?newCategory=true" colorType="primary" className="w-2/4 justify-center flex">Crear Categoria</Button>
            </div>
            {/* Listado de categorias */}

            <div className="max-wmax-w-screen-2xl m-auto px-16 pt-2 pb-40">
              <ListCategori data={data} mutate={mutate} />
            </div>

            <FormModal />
          </div>
        </div>
      </>
    );
}

export default Categories;
