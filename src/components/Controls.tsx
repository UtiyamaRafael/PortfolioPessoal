"use client";

import { Moon, Sun, Languages } from "lucide-react";
import { ui, type Lang } from "@/data/content";

type Props = { dark: boolean; toggleTheme: () => void; lang: Lang; toggleLang: () => void };

const iconBtn = "rounded-lg p-2 transition hover:bg-black/5 dark:hover:bg-white/10";

export default function Controls({ dark, toggleTheme, lang, toggleLang }: Props) {
  return (
    <div className="flex items-center gap-1">
      <button onClick={toggleLang} aria-label={ui.langLabel[lang]} className={`${iconBtn} flex items-center gap-1.5 text-sm font-medium`}>
        <Languages size={18} />
        {lang === "pt" ? "EN" : "PT"}
      </button>
      <button onClick={toggleTheme} aria-label={ui.themeLabel[lang]} className={iconBtn}>
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}
