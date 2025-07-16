"use client";

import { Loader } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type LoadingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export default function CustomButton({
  type = "button",
  loading,
  children,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      aria-busy={loading}
      aria-disabled={loading || disabled}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <Loader className="animate-spin w-4 h-4" />
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
}
