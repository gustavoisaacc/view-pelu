import React from "react";

type CardContainerProp = {
  children: React.ReactNode;
  className?: string;
};

function CardContainer({ children, className }: CardContainerProp) {
  return (
    <section
      className={`shadow-md rounded-lg bg-primary mb-4 ${className}`}
    >
      {children}
    </section>
  );
}

export default CardContainer;
