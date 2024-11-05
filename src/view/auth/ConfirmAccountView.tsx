import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { ConfirmToken } from "../../schema/auth";
import { ConfirmAccount } from "../../api/AuthApi";
import { error } from "console";
import { toast } from "react-toastify";

export default function ConfirmAccountView() {
  const [token, setToken] = useState<ConfirmToken["token"]>("");
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: ConfirmAccount,
    onError: (error) => {
      toast.error(`${error}`);
    },
    onSuccess: (data) => {
      toast.success(data);
      setTimeout(() => {
        navigate("/auth/login");
      }, 3000);
    },
  });

  const handelChange = (token: ConfirmToken["token"]) => {
    setToken(token);
  };

  const handelComplete = (token: ConfirmToken["token"]) => mutate({ token });

  return (
    <>
      <h1 className="text-2xl font-black text-white">Confirma tu Cuenta</h1>
      <p className="text-lg font-light text-white mt-5">
        Ingresa el código que recibiste {""}
        <span className=" text-fuchsia-500 font-bold"> por e-mail</span>
      </p>
      <form className="space-y-8 p-10 bg-white mt-10">
        <label className="font-normal text-2xl text-center block">
          Código de 6 dígitos
        </label>
        <div className="flex justify-center gap-5">
          <PinInput
            value={token}
            onChange={handelChange}
            onComplete={handelComplete}
          >
            <PinInputField className="w-10 h-10 p-3 rounded-lg border border-gray-300 placeholder-white" />
            <PinInputField className="w-10 h-10 p-3 rounded-lg border border-gray-300 placeholder-white" />
            <PinInputField className="w-10 h-10 p-3 rounded-lg border border-gray-300 placeholder-white" />
            <PinInputField className="w-10 h-10 p-3 rounded-lg border border-gray-300 placeholder-white" />
            <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white" />
            <PinInputField className="w-10 h-10 p-3 rounded-lg border border-gray-300 placeholder-white" />
          </PinInput>
        </div>
      </form>

      <nav className="mt-10 flex flex-col space-y-4">
        <Link
          to="/auth/request-code"
          className="text-center text-gray-300 font-normal"
        >
          Solicitar un nuevo Código
        </Link>
      </nav>
    </>
  );
}
