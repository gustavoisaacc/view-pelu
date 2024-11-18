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
      <div className="bg-lightpurple">
      <h1 className=" text-6xl text-white capitalize font-semibold flex justify-center">
            {dataCategory.name}
          </h1>
        <div className="flex justify-around pt-16">
          <Button route="/category" className="bg-primary w-1/5 flex justify-center">
            Volver
          </Button>
          <Button route="?newService=true" colorType="primary" className="w-2/4 justify-center flex">Crear Servicio</Button>
        </div>
        {/* Listado de categorias */}

        <div className="max-wmax-w-screen-2xl m-auto px-16">
          <ListService dataService={dataService} mutate={mutate} />
        </div>

        <FormServiceModal />
        </div>
      </>
    );
}

export default Service;
