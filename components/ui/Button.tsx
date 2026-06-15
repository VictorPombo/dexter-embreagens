import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dexter-blue disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-dexter-blue text-white hover:bg-dexter-blue/90": variant === "primary",
            "bg-dexter-red text-white hover:bg-dexter-red/90": variant === "secondary",
            "bg-transparent border border-dexter-text text-dexter-text hover:bg-white/5": variant === "outline",
            "bg-dexter-alert text-dexter-dark hover:bg-dexter-alert/90": variant === "danger",
            "bg-transparent text-dexter-text hover:bg-white/5": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-12 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
