"use client";

import CustomButton from "@/components/Common/CustomButton";
import { useLanguage, useTranslation } from "@/lib/i18n/client";
import React, { FormEvent } from "react";
import { resetPasswordAction } from "../../actions";
import { TreeifiedError } from "@/lib/types";
import { ErrorMessages } from "@/components/Common/ErrorMessages";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {
  const router = useRouter();
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  const [treeifyError, setTreeifyError] = React.useState<
    TreeifiedError | undefined
  >(undefined);
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTreeifyError(undefined);
    setLoading(true);
    try {
      const formData = new FormData(event.currentTarget);
      const result = await resetPasswordAction(formData);
      if (result.isSuccess && result.redirectTo) {
        router.push(result.redirectTo);
      }
      if (!result?.isSuccess) {
        setTreeifyError(result?.treeifyError);
        setLoading(false);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        setTreeifyError({ errors: [error.message] });
        setLoading(false);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ErrorMessages errors={treeifyError?.errors} />
      <div className="space-y-1 mb-4">
        <label className="block text-sm font-medium text-gray-500">
          {t("auth:password")}
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            maxLength={100}
            className="block w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent transition"
            disabled={loading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 p-1 cursor-pointer text-sky-700 hover:text-sky-800"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <ErrorMessages errors={treeifyError?.properties?.password?.errors} />
      </div>
      <div className="space-y-1 mb-4">
        <label className="block text-sm font-medium text-gray-500">
          {t("auth:confirm_password")}
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirm-password"
            maxLength={100}
            className="block w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent transition"
            disabled={loading}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-2 p-1 cursor-pointer text-sky-700 hover:text-sky-800"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <ErrorMessages
          errors={treeifyError?.properties?.confirmPassword?.errors}
        />
      </div>
      <div className="flex justify-end">
        <CustomButton
          type="submit"
          className="px-4 py-2 rounded-sm bg-sky-700 hover:bg-sky-800 text-white text-xs cursor-pointer"
          loading={loading}
        >
          {t("auth:reset_password")}
        </CustomButton>
      </div>
    </form>
  );
}
