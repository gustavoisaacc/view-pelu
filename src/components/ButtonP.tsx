import * as React from "react";

type ButtonProps = {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  children: React.ReactNode;
};

const buttonVariants = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90 border-transparent",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-transparent",
  outline:
    "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
  ghost:
    "text-foreground hover:bg-accent hover:text-accent-foreground border-transparent",
  link: "text-primary underline-offset-4 hover:underline border-transparent",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "default", size = "default", className, children, ...props },
    ref
  ) => {
    const buttonClass = `${buttonVariants[variant]} ${buttonSizes[size]} ${
      className || ""
    }`;

    return (
      <button
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${buttonClass}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
