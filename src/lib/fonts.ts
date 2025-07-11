import { Rubik, Noto_Sans_JP, Inter } from "next/font/google";

export const rubik = Rubik({
  weight: ["500"],
  subsets: ["latin"],
  display: "swap",
});

export const notoSansJp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
