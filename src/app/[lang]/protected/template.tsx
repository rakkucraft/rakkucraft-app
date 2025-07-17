"use client";

import CustomLink from "@/components/Common/CustomLink";
import { rubik } from "@/lib/fonts";
import { useLanguage, useTranslation } from "@/lib/i18n/client";
import {
  Camera,
  Gauge,
  House,
  MessageSquare,
  PaintbrushVertical,
  Pin,
  Plug,
  Plus,
  Settings,
  StickyNote,
  UserRound,
  Wrench,
} from "lucide-react";
import { logoutAction } from "../(auth)/actions";
import { useRouter } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);

  const handleClickLogout = async () => {
    try {
      const result = await logoutAction();
      if (result.isSuccess && result.redirectTo) {
        router.push(result.redirectTo);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <>
      <header className="flex items-center justify-between bg-zinc-800 text-sm text-zinc-300">
        <div className="flex items-center">
          <button
            className={`flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-1 ${rubik.className} font-medium`}
            aria-label="Top page"
          >
            {t("site-name")}
          </button>
          <button
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-1 font-medium"
            aria-label="Current site"
          >
            <House className="w-4 h-4 mr-1 text-zinc-400 group-hover:text-sky-300" />
            Test Site
          </button>
          <button
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-1 font-medium"
            aria-label="View comments"
          >
            <MessageSquare className="w-4 h-4 mr-1 text-zinc-400 group-hover:text-sky-300" />
            5
          </button>
          <button
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-1 font-medium"
            aria-label="New"
          >
            <Plus className="w-4 h-4 mr-1 text-zinc-400 group-hover:text-sky-300" />
            {t("new")}
          </button>
        </div>
        <div className="group relative">
          <button
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-1 font-medium"
            aria-label="Account settings"
          >
            <div className="mr-1.5">Test Admin</div>
            <div className="bg-gray-400 text-white p-1">
              <UserRound className="w-4 h-4" />
            </div>
          </button>
          <div className="absolute right-0 hidden group-hover:block bg-zinc-700 p-2 w-50">
            <button
              className="cursor-pointer hover:bg-sky-950 hover:text-sky-300"
              onClick={handleClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <div className="flex">
        <aside className="h-[calc(100vh-36px)] w-46 bg-zinc-800 text-sm text-zinc-300 font-medium">
          <CustomLink
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="Dashboard"
          >
            <Gauge className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("dashboard")}
          </CustomLink>
          <CustomLink
            className="relative flex items-center cursor-pointer bg-sky-600 hover:bg-sky-500 text-white border-l-4 border-transparent transition p-2"
            href="/"
            aria-label="Posts"
            aria-current="page"
          >
            <Pin className="w-4 h-4 mr-2.5" />
            {t("posts")}
            <div className="absolute right-0 w-0 h-0 border-y-[10px] border-r-[10px] border-y-transparent border-r-zinc-100"></div>
          </CustomLink>
          <CustomLink
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="Media"
          >
            <Camera className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("media")}
          </CustomLink>
          <CustomLink
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="Static pages"
          >
            <StickyNote className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("pages")}
          </CustomLink>
          <CustomLink
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="Comments"
          >
            <MessageSquare className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("comments")}
          </CustomLink>
          <CustomLink
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="Appearances"
          >
            <PaintbrushVertical className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("appearance")}
          </CustomLink>
          <CustomLink
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="Pulugins"
          >
            <Plug className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("plugins")}
          </CustomLink>
          <CustomLink
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="Users"
          >
            <UserRound className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("users")}
          </CustomLink>
          <CustomLink
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="Tools"
          >
            <Wrench className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("tools")}
          </CustomLink>
          <CustomLink
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/protected/settings"
            aria-label="Settings"
          >
            <Settings className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("settings")}
          </CustomLink>
        </aside>
        <main className="bg-zinc-100 h-[calc(100vh-36px)] grow">
          {children}
        </main>
      </div>
    </>
  );
}
