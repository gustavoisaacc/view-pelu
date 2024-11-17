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
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const initialValue: CategoryData = {
  name: "",
};

export default function ModalViewAppointment() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParam = new URLSearchParams(location.search);
  const query = queryParam.get("view-appointment");
  const show = query ? true : false;

  // UseForm
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
  });

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
                    className="font-black text-xl lg:text-4xl  my-5"
                  >
                    Turno
                  </DialogTitle>

                  <form className=" mt-10 bg-white shadow-lg p-5 round-lg ">
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
