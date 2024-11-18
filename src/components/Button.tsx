import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ColorType = "success" | "warning" | "danger" | "primary";

interface BtnProps {
  colorType?: ColorType;
  children: ReactNode;
  className?: string;
  route?: string;
  onclick?: () => void;
}

function Button({ colorType, children, className, route, onclick }: BtnProps) {
  // Definir el color basado en la tarea, con un valor base por defecto

  const baseStyles = `text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75 transition  duration-300 ease-in-outs`;

  // Mapear colores según el tipo
  const colorClasses = {
    warning: "bg-warning hover:bg-yellow-700",
    danger: "bg-error hover:bg-red-600",
    success: "bg-success hover:bg-green-600",
    primary: "bg-primary hover:bg-secondary",
    default: "bg-primary hover:bg-secondary",
  };

  // Usar el color definido o el color por defecto
  const colorClass = colorType ? colorClasses[colorType] : colorClasses.default;

  return (
    <Link
      onClick={onclick}
      to={`${route}`}
      className={`${baseStyles} ${colorClass} ${className}`}
    >
      {children}
    </Link>
  );
}

export default Button;
