import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategoryById } from "../api/CategoryApi";
import ListService from "../components/service/ListService";
import FormServiceModal from "../components/service/FormServerModal";
import { deleteService, getService } from "../api/ServiceApi";
import { toast } from "react-toastify";

function Service() {
  const params = useParams();
  const categoryId = params.categoryId;
  const { data: dataService } = useQuery({
    queryKey: ["service"],
    queryFn: () => getService(categoryId || ""),
    enabled: !!categoryId,
  });

  const { data: dataCategory, isLoading } = useQuery({
    queryKey: ["categoryId", categoryId],
    queryFn: () => getCategoryById(categoryId || ""),
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteService,
    onError: (data) => {
      toast.error("Error al eliminar la categoria: " + data.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["service"] });
      toast.success(data);
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (dataCategory)
    return (
      <>
        <Button route="/category" className=" inline-block  ml-16 mt-10">
          Volver
        </Button>
        <div className="max-w-screen-xl m-auto p-16">
          <h1 className=" text-2xl capitalize font-semibold my-5">
            {dataCategory.name}
          </h1>
          <Button route="?newService=true">Crear Servicio</Button>
        </div>
        {/* Listado de categorias */}

        <div className="max-wmax-w-screen-2xl m-auto px-16">
          <ListService dataService={dataService} mutate={mutate} />
        </div>

        <FormServiceModal />
      </>
    );
}

export default Service;
