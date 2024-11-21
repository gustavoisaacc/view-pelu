import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategoryById } from "../api/CategoryApi";
import ListService from "../components/service/ListService";
import FormServiceModal from "../components/service/FormServerModal";
import { deleteService, getService } from "../api/ServiceApi";
import { toast } from "react-toastify";
import { Plus } from "lucide-react";
import HairSalonSpinner from "../components/Spinner";

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

  if (isLoading) return <HairSalonSpinner />;

  if (dataCategory)
    return (
      <>
        <div className="bg-lightpurple w-[90%] m-auto mt-5">
          <h1 className=" text-4xl text-white capitalize flex justify-center">
            {dataCategory.name}
          </h1>
          <div className="flex justify-between mt-10">
            <Button
              route="/category"
              className="bg-primary w-1/5 flex justify-center"
            >
              Volver
            </Button>
            <Button
              route="?newService=true"
              colorType="primary"
              className="flex items-center"
            >
              <Plus className="mr-2 h-4 w-4" />
              Crear Servicio
            </Button>
          </div>
          {/* Listado de categorias */}

          <div className="mt-5">
            <ListService dataService={dataService} mutate={mutate} />
          </div>

          <FormServiceModal />
        </div>
      </>
    );
}

export default Service;
