import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteCategory, getCategory } from "../api/CategoryApi";
import { toast } from "react-toastify";

import FormModal from "../components/category/FormModal";
import ListCategori from "../components/category/ListCategori";
import Button from "../components/Button";
import { Plus } from "lucide-react";
import HairSalonSpinner from "../components/Spinner";

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

  if (isLoading) return <HairSalonSpinner />;
  if (data)
    return (
      <>
        <div className=" w-[90%] m-auto">
          <div className="w-full">
            <h1 className="text-4xl my-5 text-gray-100 flex justify-center">
              CATEGORIAS
            </h1>
            <div className="flex w-full m-auto justify-between">
              <Button
                route="/dashboard"
                className=" bg-primary w-1/5 flex justify-center"
              >
                Volver
              </Button>
              <Button
                route="?newCategory=true"
                colorType="primary"
                className="flex items-center"
              >
                <Plus className="mr-2 h-4 w-4" />
                Crear Categoria
              </Button>
            </div>
            {/* Listado de categorias */}

            <div className="">
              <ListCategori data={data} mutate={mutate} />
            </div>

            <FormModal />
          </div>
        </div>
      </>
    );
}

export default Categories;
