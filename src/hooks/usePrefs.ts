"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/data/content";

export function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setDark(saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
}

export function useLang() {
  const [lang, setLang] = useState<Lang>("pt");
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    setLang(saved ?? (navigator.language.startsWith("pt") ? "pt" : "en"));
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    localStorage.setItem("lang", lang);
  }, [lang]);
  return { lang, toggle: () => setLang((l) => (l === "pt" ? "en" : "pt")) };
}
