import { rubik } from "@/utils/fonts";
import {
  Camera,
  Gauge,
  House,
  MessageSquare,
  PaintbrushVertical,
  Pin,
  Plug,
  Plus,
  RefreshCw,
  Settings,
  StickyNote,
  UserRound,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
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
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-2"
            aria-label="current-site"
          >
            <House className="w-4 h-4 mr-1" />
            Test Site
          </button>
          <button
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-2"
            aria-label="reloads"
          >
            <RefreshCw className="w-4 h-4 mr-1" />3
          </button>
          <button
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-2"
            aria-label="comments"
          >
            <MessageSquare className="w-4 h-4 mr-1" />5
          </button>
          <button
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 transition px-2 py-2"
            aria-label="new"
          >
            <Plus className="w-4 h-4 mr-1" />
            New
          </button>
        </div>
        <div className="flex items-center mr-2">
          <div className="mr-1.5">Test Admin</div>
          <button
            className="cursor-pointer bg-gray-400 hover:bg-gray-500 text-white transition p-1"
            aria-label="account-setting"
          >
            <UserRound className="w-4 h-4" />
          </button>
        </div>
      </header>
      <div className="flex">
        <aside className="h-[calc(100vh-36px)] w-46 bg-zinc-800 text-sm text-zinc-300">
          <Link
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 px-4 py-2"
            href="/"
            aria-label="dashboard"
          >
            <Gauge className="w-4 h-4 mr-2.5" />
            Dashboard
          </Link>
          <Link
            className="relative flex items-center cursor-pointer bg-sky-600 hover:bg-sky-500 text-white px-4 py-2"
            href="/"
            aria-label="posts"
            aria-current="page"
          >
            <Pin className="w-4 h-4 mr-2.5" />
            Posts
            <div className="absolute right-0 w-0 h-0 border-y-[10px] border-r-[10px] border-y-transparent border-r-zinc-100"></div>
          </Link>
          <Link
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 px-4 py-2"
            href="/"
            aria-label="media"
          >
            <Camera className="w-4 h-4 mr-2.5" />
            Media
          </Link>
          <Link
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 px-4 py-2"
            href="/"
            aria-label="static-pages"
          >
            <StickyNote className="w-4 h-4 mr-2.5" />
            Pages
          </Link>
          <Link
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 px-4 py-2"
            href="/"
            aria-label="comments"
          >
            <MessageSquare className="w-4 h-4 mr-2.5" />
            Comments
          </Link>
          <Link
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 px-4 py-2"
            href="/"
            aria-label="appearances"
          >
            <PaintbrushVertical className="w-4 h-4 mr-2.5" />
            Appearance
          </Link>
          <Link
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 px-4 py-2"
            href="/"
            aria-label="pulugins"
          >
            <Plug className="w-4 h-4 mr-2.5" />
            Plugins
          </Link>
          <Link
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 px-4 py-2"
            href="/"
            aria-label="users"
          >
            <UserRound className="w-4 h-4 mr-2.5" />
            Users
          </Link>
          <Link
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 px-4 py-2"
            href="/"
            aria-label="tools"
          >
            <Wrench className="w-4 h-4 mr-2.5" />
            Tools
          </Link>
          <Link
            className="flex items-center cursor-pointer hover:bg-sky-950 hover:text-sky-300 px-4 py-2"
            href="/protected/settings"
            aria-label="settings"
          >
            <Settings className="w-4 h-4 mr-2.5" />
            Settings
          </Link>
        </aside>
        <main className="bg-zinc-100 h-[calc(100vh-36px)] grow">
          {children}
        </main>
      </div>
    </>
  );
}
