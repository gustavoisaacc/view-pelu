import { Fragment, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import ServiceForm from "./ServiceForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { ServiceFormData } from "../../schema/service.schema";
import {
  cerateService,
  getServiceById,
  updateService,
} from "../../api/ServiceApi";

const initialValue: ServiceFormData = {
  name: "",
  description: "",
  duration: "",
  price: 0,
};

export default function FormServiceModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const categoryId = params.categoryId;

  const queryParam = new URLSearchParams(location.search);
  const query = queryParam.get("newService");
  const serviceId = queryParam.get("serviceId");

  const show = query || serviceId ? true : false;

  // UseForm
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue, // Proporciona el valor inicial correctamente
  });
  // obtenerCada un de lso servicios
  const { data: editServicio, isLoading } = useQuery({
    queryKey: ["editService", serviceId],
    queryFn: () =>
      getServiceById({
        categoryId: categoryId || "",
        serviceId: serviceId || "",
      }),
    enabled: !!serviceId,
    retry: false,
  });
  useEffect(() => {
    if (editServicio && serviceId) {
      setValue("name", editServicio.name);
      setValue("description", editServicio.description);
      setValue("duration", editServicio.duration);
      setValue("price", Number(editServicio.price));
    }
  }, [editServicio, serviceId, setValue]);

  const queryClient = useQueryClient();
  //cerar y editar los servicios
  const { mutate } = useMutation({
    mutationFn: (data: {
      formData: ServiceFormData;
      categoryId: string;
      serviceId: string;
    }) => {
      return data.serviceId
        ? updateService(data)
        : cerateService({
            categoryId: data.categoryId,
            formData: data.formData,
          });
    },
    onError: (error) => {
      console.log("🚀 ~ FormServiceModal ~ data:", error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["service"] });
      queryClient.invalidateQueries({ queryKey: ["editService", serviceId] });
      toast.success(data);
      reset();
      navigate(location.pathname);
    },
  });

  const onSubmit = async (formData: ServiceFormData) => {
    const formattedId = categoryId || "";
    const formattedIdService = serviceId || "";
    mutate({
      formData,
      categoryId: formattedId,
      serviceId: formattedIdService,
    });
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={show}
          onClose={() => {
            reset();
            navigate(location.pathname);
          }}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-5 md:p-10">
                  <DialogTitle
                    as="h3"
                    className="font-black text-xl lg:text-4xl  my-5"
                  >
                    {serviceId ? "Editar Service" : "Crear Service"}
                  </DialogTitle>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" mt-10 bg-white shadow-lg p-5 round-lg "
                  >
                    <ServiceForm register={register} errors={errors} />
                    <button
                      type="submit"
                      className="block w-full bg-primary hover:bg-darkpurple mt-5 text-center text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition  duration-300 ease-in-outs"
                    >
                      Guardar
                    </button>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
