import React from "react";

type CardContainerProp = {
  children: React.ReactNode;
  className?: string;
};

function CardContainer({ children, className }: CardContainerProp) {
  return (
    <section
      className={`shadow-md rounded-lg border-b border-gray-300 ${className}`}
    >
      {children}
    </section>
  );
}

export default CardContainer;
