import { useState } from "react";
import NewPasswordToken from "../../components/auth/NewPasswordToken";
import NewPasswordForms from "../../components/auth/NewPasswordForm";
import { ConfirmToken } from "../../schema/auth";

function NewPasswordView() {
  const [token, setToken] = useState<ConfirmToken["token"]>("");
  const [isValidateToken, setValidateToken] = useState(false);
  console.log("🚀 ~ NewPasswordView ~ isValidateToken:", isValidateToken);
  return (
    <>
      <h1 className="text-4xl font-black text-white">Reestablecer Password</h1>
      <p className="text-2xl font-light  text-white mt-5">
        {!isValidateToken
          ? "Ingresa el codigo que reciviste"
          : "Ingresa tu nuea password"}
        {""}
        <span className=" text-fuchsia-700 font-bold">
          {!isValidateToken ? "por email" : ""}
        </span>
      </p>
      {!isValidateToken ? (
        <NewPasswordToken
          token={token}
          setToken={setToken}
          setValidateToken={setValidateToken}
        />
      ) : (
        <NewPasswordForms token={token} />
      )}
    </>
  );
}

export default NewPasswordView;
