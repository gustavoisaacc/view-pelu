import { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { CategoryData } from "../../schema/categroy.schema";
import {
  createCategory,
  getCategoryById,
  updateCategoru,
} from "../../api/CategoryApi";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import CategoryForm from "./CategoryForm";

const initialValue: CategoryData = {
  name: "",
};

export default function FormModal() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParam = new URLSearchParams(location.search);
  const query = queryParam.get("newCategory");
  const categoryId = queryParam.get("categoryId");
  const show = query || categoryId ? true : false;

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

  //con useQuery nos permite editarla
  const { data, isLoading, isError } = useQuery({
    queryKey: ["editCategory", categoryId],
    queryFn: () => getCategoryById(categoryId || ""),
    enabled: !!categoryId, // Solo ejecuta esta consulta si hay un categoryId
    retry: false,
  });
  // Este efecto se ejecuta cuando los datos están disponibles y establece los valores en el formulario
  useEffect(() => {
    if (data && categoryId) {
      setValue("name", data.name);
    }
  }, [data, categoryId, setValue]);

  const queryClient = useQueryClient();

  // Función de mutación que decide si crea o edita
  const { mutate } = useMutation({
    mutationFn: (data: { formData: CategoryData; categoryId?: string }) => {
      return data.categoryId
        ? updateCategoru(data)
        : createCategory(data.formData);
    },
    onError: (error) => {
      console.log("🚀 ~ FormModal ~ error:", error);
      toast.error(error.message);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      toast.success(data);
      reset();
      navigate(location.pathname);
    },
  });

  // Función para manejar el envío del formulario
  const onSubmit = async (formData: CategoryData) => {
    const formattedCategoryId = categoryId || undefined;

    mutate({ formData, categoryId: formattedCategoryId });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return navigate("/404");
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
                    {categoryId ? "Editar Categoría" : "Crear Categoría"}
                  </DialogTitle>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className=" mt-10 bg-white shadow-lg p-5 round-lg "
                  >
                    <CategoryForm register={register} errors={errors} />
                    <button
                      type="submit"
                      className="block w-full bg-lightpurple hover:bg-darkpurple mt-5 text-center text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition  duration-300 ease-in-outs"
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
