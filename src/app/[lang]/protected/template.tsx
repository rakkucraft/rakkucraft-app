"use client";

import { rubik } from "@/lib/fonts";
import { useLanguage, useTranslation } from "@/translations/client";
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
import Link from "next/link";

export default function Template({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();
  const { t } = useTranslation(lang);
  return (
    <>
      <header className="flex items-center justify-between bg-zinc-800 text-sm text-zinc-300">
        <div className="flex items-center">
          <button
            className={`flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-2 ${rubik.className} font-medium`}
            aria-label="current-site"
          >
            Rakkucraft
          </button>
          <button
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-2 font-medium"
            aria-label="current-site"
          >
            <House className="w-4 h-4 mr-1 text-zinc-400 group-hover:text-sky-300" />
            Test Site
          </button>
          <button
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-2 font-medium"
            aria-label="comments"
          >
            <MessageSquare className="w-4 h-4 mr-1 text-zinc-400 group-hover:text-sky-300" />
            5
          </button>
          <button
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-2 font-medium"
            aria-label="new"
          >
            <Plus className="w-4 h-4 mr-1 text-zinc-400 group-hover:text-sky-300" />
            {t("new")}
          </button>
        </div>
        <div>
          <button
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-1 font-medium"
            aria-label="account-setting"
          >
            <div className="mr-1.5">Test Admin</div>
            <div className="bg-gray-400 text-white p-1">
              <UserRound className="w-4 h-4" />
            </div>
          </button>
        </div>
      </header>
      <div className="flex">
        <aside className="h-[calc(100vh-36px)] w-46 bg-zinc-800 text-sm text-zinc-300 font-medium">
          <Link
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="dashboard"
          >
            <Gauge className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("dashboard")}
          </Link>
          <Link
            className="relative flex items-center cursor-pointer bg-sky-600 hover:bg-sky-500 text-white border-l-4 border-transparent transition p-2"
            href="/"
            aria-label="posts"
            aria-current="page"
          >
            <Pin className="w-4 h-4 mr-2.5" />
            {t("posts")}
            <div className="absolute right-0 w-0 h-0 border-y-[10px] border-r-[10px] border-y-transparent border-r-zinc-100"></div>
          </Link>
          <Link
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="media"
          >
            <Camera className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("media")}
          </Link>
          <Link
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="static-pages"
          >
            <StickyNote className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("pages")}
          </Link>
          <Link
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="comments"
          >
            <MessageSquare className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("comments")}
          </Link>
          <Link
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="appearances"
          >
            <PaintbrushVertical className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("appearance")}
          </Link>
          <Link
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="pulugins"
          >
            <Plug className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("plugins")}
          </Link>
          <Link
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="users"
          >
            <UserRound className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("users")}
          </Link>
          <Link
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/"
            aria-label="tools"
          >
            <Wrench className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("tools")}
          </Link>
          <Link
            className="group flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 border-l-4 border-transparent hover:border-sky-300 transition p-2"
            href="/protected/settings"
            aria-label="settings"
          >
            <Settings className="w-4 h-4 mr-2.5 text-zinc-400 group-hover:text-sky-300" />
            {t("settings")}
          </Link>
        </aside>
        <main className="bg-zinc-100 h-[calc(100vh-36px)] grow">
          {children}
        </main>
      </div>
    </>
  );
}
