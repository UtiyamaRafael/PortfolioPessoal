"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Github, Linkedin, Mail, Download, ExternalLink, MapPin, Copy, Check, Award } from "lucide-react";
import { profile, ui, nav, timeline, skills, projects, type Lang } from "@/data/content";
import { extra } from "@/data/extra";
import { useTheme, useLang } from "@/hooks/usePrefs";
import Controls from "@/components/Controls";
import Reveal from "@/components/Reveal";

// Versão 4: visual da versão 1 (teal + card GET /api) com elementos do site de referência:
// avatar com localização, chips rotativos, estatísticas, formação/idiomas, experiência detalhada,
// filtros de projetos, certificações e CTA de contato com "copiar e-mail".

const btn =
  "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500";
const outline = `${btn} border border-slate-300 dark:border-slate-700`;
const card = "rounded-xl border border-slate-200 dark:border-slate-800";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-slate-300 bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
      {children}
    </span>
  );
}

function RotatingChip({ lang }: { lang: Lang }) {
  const [i, setI] = useState(0);
  const words = extra.rotating[lang];
  useEffect(() => {
    const t = setInterval(() => setI((n) => n + 1), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-sm text-teal-700 dark:text-teal-300">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-500" />
      {words[i % words.length]}
    </span>
  );
}

// Brilho que segue o mouse (desativado em telas touch e com prefers-reduced-motion)
function CursorGlow() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    const root = document.documentElement;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${e.clientX}px`);
        root.style.setProperty("--my", `${e.clientY}px`);
        root.style.setProperty("--glow", "1");
      });
    };
    const leave = () => root.style.setProperty("--glow", "0");
    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity: "var(--glow, 0)",
        background:
          "radial-gradient(520px circle at var(--mx, 50%) var(--my, 50%), rgba(20,184,166,0.10), transparent 65%)",
      }}
    />
  );
}

// Seção ativa de acordo com a rolagem (scroll-spy)
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const top = () => window.scrollY < 120 && setActive("");
    window.addEventListener("scroll", top, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", top);
    };
  }, [ids]);
  return active;
}

const navIds = nav.map((n) => n.id);

export default function PageV4() {
  const { dark, toggle: toggleTheme } = useTheme();
  const { lang, toggle: toggleLang } = useLang();
  const active = useActiveSection(navIds);
  const [filter, setFilter] = useState("all");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const response = {
    status: 200,
    data: {
      name: profile.name,
      role: ui.role[lang],
      focus: extra.rotating[lang],
      open_to: lang === "pt" ? ["estágio", "júnior"] : ["internship", "junior"],
    },
  };

  return (
    <main className="min-h-screen scroll-smooth bg-white text-slate-900 dark:bg-zinc-950 dark:text-slate-100">
      <CursorGlow />
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-teal-600 focus:px-4 focus:py-2 focus:text-white">
        {extra.skip[lang]}
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="#top" className="font-semibold">RU</a>
          <ul className="hidden gap-6 text-sm sm:flex">
            {nav.map((n) => {
              const on = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    aria-current={on ? "true" : undefined}
                    className={`relative py-1 transition after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded after:bg-teal-500 after:transition-transform after:duration-300 ${
                      on
                        ? "font-medium text-teal-600 after:scale-x-100 dark:text-teal-400"
                        : "text-slate-600 after:scale-x-0 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400"
                    }`}
                  >
                    {n.label[lang]}
                  </a>
                </li>
              );
            })}
          </ul>
          <Controls dark={dark} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />
        </nav>
      </header>

      <div id="conteudo">
        {/* HERO */}
        <section id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-12 pt-16 md:grid-cols-2 md:pt-24">
          <div>
            <div className="mb-5 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={extra.avatar} alt={profile.name} width={48} height={48} className="h-12 w-12 rounded-full border border-slate-300 object-cover dark:border-slate-700" />
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={14} /> {extra.location[lang]}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
            <p className="mt-2 text-lg text-teal-600 dark:text-teal-400">{ui.role[lang]}</p>
            <div className="mt-4"><RotatingChip lang={lang} /></div>
            <p className="mt-5 max-w-md text-lg text-slate-600 dark:text-slate-300">{ui.tagline[lang]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.cv} download className={`${btn} bg-teal-600 text-white hover:bg-teal-500`}>
                <Download size={16} /> {ui.cv[lang]}
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className={outline}><Github size={16} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className={outline}><Linkedin size={16} /> LinkedIn</a>
              <a href={`mailto:${profile.email}`} className={outline}><Mail size={16} /> {ui.email[lang]}</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-300 bg-zinc-950 shadow-lg dark:border-slate-700">
            <div className="border-b border-slate-800 px-4 py-2 font-mono text-xs text-slate-400">GET /api/rafael</div>
            <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-teal-300">{JSON.stringify(response, null, 2)}</pre>
          </div>
        </section>

        {/* SOBRE + ESTATÍSTICAS + FORMAÇÃO/IDIOMAS */}
        <Section id="sobre" title={nav[0].label[lang]}>
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>{ui.about1[lang]}</p>
                <p>{ui.about2[lang]}</p>
                <dl className="grid grid-cols-3 gap-4 pt-4">
                  {extra.stats.map((s, i) => (
                    <div key={i} className={`${card} p-4 text-center transition duration-200 hover:border-teal-500`}>
                      <dt className="text-2xl font-bold text-teal-600 dark:text-teal-400">{s.value}</dt>
                      <dd className="mt-1 text-xs text-slate-500 dark:text-slate-400">{s.label[lang]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className={`${card} space-y-5 p-5`}>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{extra.educationTitle[lang]}</h3>
                  <p className="font-medium">{timeline[0].title[lang]}</p>
                  <p className="text-sm text-teal-600 dark:text-teal-400">{timeline[0].place[lang]} · {timeline[0].period[lang]}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-semibold text-slate-500 dark:text-slate-400">{extra.languagesTitle[lang]}</h3>
                  <ul className="space-y-1 text-sm">
                    {extra.languages.map((l, i) => <li key={i}>{l[lang]}</li>)}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* EXPERIÊNCIA E FORMAÇÃO */}
        <Section id="trajetoria" title={ui.expTitle[lang]}>
          <ol className="relative ml-2 border-l border-slate-300 dark:border-slate-700">
            {timeline.map((item, i) => {
              const d = extra.timelineDetails[i];
              return (
                <li key={i} className="mb-10 ml-6 last:mb-0">
                  <Reveal delay={i * 0.05}>
                    <span className={`absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-zinc-950 ${item.type === "formacao" ? "bg-teal-500" : "bg-slate-500"}`} />
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.period[lang]}</p>
                    <h3 className="font-semibold">{item.title[lang]}</h3>
                    <p className="text-sm text-teal-600 dark:text-teal-400">{item.place[lang]}</p>
                    <ul className="mt-2 max-w-xl list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
                      {d.bullets.map((b, j) => <li key={j}>{b[lang]}</li>)}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">{d.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </Section>

        {/* STACK + CERTIFICAÇÕES */}
        <Section id="stack" title={ui.skillsTitle[lang]}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`${card} h-full p-5 transition duration-200 hover:border-teal-500 dark:hover:border-teal-500`}>
                  <h3 className="mb-3 font-semibold">{s.group[lang]}</h3>
                  <div className="flex flex-wrap gap-2">{s.items.map((item) => <Badge key={item}>{item}</Badge>)}</div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className={`${card} h-full p-5 transition duration-200 hover:border-teal-500 dark:hover:border-teal-500`}>
                <h3 className="mb-3 font-semibold">{extra.certsTitle[lang]}</h3>
                <ul className="space-y-2 text-sm">
                  {extra.certs.map((c) => (
                    <li key={c.name}>
                      <a href={c.url} target="_blank" rel="noreferrer" className="group flex items-start gap-2 hover:text-teal-600 dark:hover:text-teal-400">
                        <Award size={16} className="mt-0.5 shrink-0" />
                        <span>{c.name}<span className="block text-xs text-slate-500 dark:text-slate-400">{c.org}</span></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* PROJETOS COM FILTRO */}
        <Section id="projetos" title={nav[3].label[lang]}>
          <div className="mb-8 flex flex-wrap items-center gap-2" role="group">
            {extra.projectsFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  filter === f.id
                    ? "border-teal-600 bg-teal-600 text-white"
                    : "border-slate-300 hover:border-teal-500 dark:border-slate-700"
                }`}
              >
                {f.label[lang]}
              </button>
            ))}
            <a href={profile.github + "?tab=repositories"} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-1.5 text-sm hover:text-teal-600 dark:hover:text-teal-400">
              {extra.seeAll[lang]} <ExternalLink size={14} />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => ({ p, i })).filter(({ i }) => filter === "all" || extra.projectCats[i].includes(filter)).map(({ p, i }) => (
              <Reveal key={i}>
                <article className={`${card} flex h-full flex-col p-5 transition duration-200 hover:-translate-y-1 hover:border-teal-500 hover:shadow-md`}>
                  <h3 className="font-semibold">{p.title[lang]}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-300">{p.description[lang]}</p>
                  <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
                  <div className="mt-5 flex gap-4 text-sm">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400">
                        <Github size={15} /> {ui.code[lang]}
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-teal-600 dark:hover:text-teal-400">
                        <ExternalLink size={15} /> Demo
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CONTATO: CTA */}
        <Section id="contato" title={nav[4].label[lang]}>
          <Reveal>
            <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 p-8 text-center sm:p-12">
              <p className="text-sm text-teal-600 dark:text-teal-400">{extra.cta.next[lang]}</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{extra.cta.title[lang]}</h3>
              <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-300">{extra.cta.text[lang]}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button onClick={copyEmail} className={`${btn} bg-teal-600 text-white hover:bg-teal-500`}>
                  {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? extra.cta.copied[lang] : extra.cta.copy[lang]}
                </button>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className={outline}><Linkedin size={16} /> LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer" className={outline}><Github size={16} /> GitHub</a>
              </div>
            </div>
          </Reveal>
        </Section>
      </div>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
