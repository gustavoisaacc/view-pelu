type variantType = "default" | "secondary" | "destructive" | "outline";
export const badgeVariants = {
  default: "border-transparent bg-[#9c27b0] text-white hover:bg-primary/80",
  secondary:
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive:
    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
  outline: "text-foreground",
};
const baseStyle =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
type BadgeProps = {
  className?: string;
  variant: variantType;
  children: React.ReactNode;
};

export function Badge({ className, variant, children }: BadgeProps) {
  return (
    <div className={`${baseStyle} ${badgeVariants[variant]} ${className}`}>
      {children}
    </div>
  );
}
