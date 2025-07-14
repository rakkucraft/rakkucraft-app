"use client";

import { Loader } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type LoadingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export default function CustomButton({
  loading,
  children,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <button disabled={loading || disabled} {...props}>
      {loading ? <Loader className="animate-spin w-4 h-4" /> : children}
    </button>
  );
}
