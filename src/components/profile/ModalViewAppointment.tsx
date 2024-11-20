import { Fragment, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAppointmentById,
  getCategoryByIdAppoitment,
} from "../../api/Appointmentpi";
import CardContainer from "../CardContainer";
import { formatDate } from "../../hooks/date";
import { createReservation } from "../../api/DetaillApi";
import { toast } from "react-toastify";
import { Calendar, Clock } from "lucide-react";

interface FormData {
  customerEmail: string;
  customerPhone: string;
}

export default function ModalViewAppointment() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedServices, setSelectedServices] = useState<
    {
      serviceId: string;
      name: string;
      price: number;
      duration: string;
      citaId: string;
      date: string;
      startTime: string;
      delay: string;
      emailPeluquero: string;
    }[]
  >([]);

  const queryParam = new URLSearchParams(location.search);
  const query = queryParam.get("view-appointment");
  const show = query ? true : false;

  const { handleSubmit, reset, register } = useForm<FormData>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["appointment", query],
    queryFn: () => getAppointmentById(query),
    enabled: !!query, // Ejecuta solo si `query` tiene un valor válido
  });
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategoryByIdAppoitment(data?.manager),
    enabled: !!data,
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleServiceSelect = (service: {
    serviceId: string;
    name: string;
    price: number;
    duration: string;
    citaId: string;
    date: string;
    startTime: string;
    delay: string;
  }) => {
    setSelectedServices((prev) => {
      const exists = prev.find((s) => s.serviceId === service.serviceId);
      if (exists) {
        return prev.filter((s) => s.serviceId !== service.serviceId);
      }
      return [...prev, service];
    });
  };

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createReservation,
    onError: (error) => {
      console.log("🚀 ~ ModalViewAppointment ~ error:", error);
      toast.error(error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["client"] });
      toast.success(data);
      reset();
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Servicios seleccionados:", selectedServices);
    console.log("Datos del cliente y peluquero:", data);
    const elem = {
      userId: params.id,
      selectedServices,
      data,
    };
    mutate(elem);
    // Aquí puedes enviar los datos al backend
    setSelectedCategory("");
    setSelectedServices([]);
    navigate(location.pathname);
  };

  const total = selectedServices.reduce(
    (acc, service) => acc + service.price,
    0
  );
  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar: {error.message}</p>;
  if (!data) return null;

  return (
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
          <div className="flex min-h-full sm:w-[600px] lg:w-[600px] items-center justify-center p-4 text-center m-auto">
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
                  className="font-black text-xl lg:text-4xl my-5"
                >
                  Turno
                </DialogTitle>

                <div className="grid gap-2 text-sm">
                  <div className="flex items-center gap-2 text-[#9c27b0]">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(data.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#9c27b0]">
                    <Clock className="h-4 w-4" />
                    <span>HORA: {data.startTime}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    DEMORA: {data.delay}
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <select
                    className="w-full mt-5 p-3 border border-b-gray-300"
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleccione una categoría
                    </option>
                    {categories?.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>

                  <div className="mt-5">
                    {selectedCategory &&
                      categories
                        ?.find((cat) => cat._id === selectedCategory)
                        ?.services.map((service) => (
                          <div
                            key={service._id}
                            className="flex items-center justify-between p-2 border-b"
                          >
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="mr-2"
                                checked={selectedServices.some(
                                  (s) => s.serviceId === service._id
                                )}
                                onChange={() =>
                                  handleServiceSelect({
                                    serviceId: service._id,
                                    name: service.name,
                                    price: service.price,
                                    duration: service.duration,
                                    citaId: data._id,
                                    date: data.date,
                                    startTime: data.startTime,
                                    delay: data.delay,
                                  })
                                }
                              />
                              <span>{service.name}</span>
                            </label>

                            <span className="font-bold">
                              {service.duration}
                            </span>
                            <span className="font-bold">${service.price}</span>
                          </div>
                        ))}
                  </div>

                  <div className="mt-5">
                    <h3 className="font-semibold">Servicios seleccionados:</h3>
                    <ul>
                      {selectedServices.map((service) => (
                        <li
                          key={service.serviceId}
                          className="flex justify-between border-b py-2"
                        >
                          <span>{service.name}</span>
                          <span>${service.price}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-bold text-right mt-3">Total: ${total}</p>
                  </div>

                  {/* Formulario de cliente */}
                  <div className="mt-5">
                    <label className="block font-semibold">
                      Email del Cliente
                    </label>
                    <input
                      type="email"
                      className="w-full p-3 mt-2 border rounded"
                      {...register("customerEmail", { required: true })}
                    />
                  </div>

                  <div className="mt-5">
                    <label className="block font-semibold">
                      Celular del Cliente
                    </label>
                    <input
                      type="tel"
                      className="w-full p-3 mt-2 border rounded"
                      {...register("customerPhone", { required: true })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="block w-full bg-lightpurple hover:bg-darkpurple mt-5 text-center text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition duration-300 ease-in-outs"
                  >
                    Confirmar Reserva
                  </button>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
