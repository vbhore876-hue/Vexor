"use client";

import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Bot, Gauge, ShieldCheck, Sparkles, Telegram, TerminalSquare, Zap } from 'lucide-react';
import { useRef } from 'react';

const metrics = [
  { label: 'SYSTEM', value: '99.98%' },
  { label: 'LATENCY', value: '12ms' },
  { label: 'STACK', value: 'FULL-STACK' },
];

const asciiArt = `
  ███   ███   ███   ███   ███   ███   ███
  ███  ░░██  ░░██  ░░██  ░░██  ░░██  ███
  ████████ ████████ ████████ ████████ ███
  ████████ ████████ ████████ ████████ ███
  ████████ ████████ ████████ ████████ ███
  ███   ███   ███   ███   ███   ███   ███
  ░░░   ░░░   ░░░   ░░░   ░░░   ░░░   ░░░
`;

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.28]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-1, 1], [12, -12]);
  const rotateY = useTransform(mouseX, [-1, 1], [-14, 14]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <main
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#030b12] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.16),transparent_35%),radial-gradient(circle_at_bottom,_rgba(148,163,184,0.08),transparent_50%)]" />
      <div className="grid-overlay absolute inset-0 opacity-60" />
      <div className="scanlines absolute inset-0 opacity-30" />

      <motion.div
        style={{
          y: heroY,
          scale: heroScale,
          opacity: heroOpacity,
          rotateX,
          rotateY,
          transformPerspective: 1500,
        }}
        className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
      >
        <div className="glass-panel relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-slate-950/60 px-5 py-5 shadow-glow backdrop-blur-md sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.06),transparent_30%,transparent_70%,rgba(148,163,184,0.08))]" />
          <header className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10">
                <TerminalSquare className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-cyan-200/80">@yovexor</div>
                <div className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-slate-400">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  STATUS: DEAD CALM
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cyan-100/85">
                <Bot className="h-3.5 w-3.5 text-cyan-300" />
                LIVE NODE
              </div>
              <a
                href="https://t.me/yovexor"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-cyan-400/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-100 transition hover:bg-cyan-400/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
              >
                <Telegram className="h-3.5 w-3.5" />
                t.me/yovexor
              </a>
            </div>
          </header>

          <section className="relative z-10 mt-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.36em] text-slate-300">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                water / code / precision
              </div>

              <h1 className="max-w-xl text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                  APEX
                </span>
                <span className="mt-2 block text-slate-100">FULL-STACK</span>
                <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-100 to-white bg-clip-text text-transparent">
                  ARCHITECT
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300/90 sm:text-base">
                Engineering immersive product systems with calm precision, ruthless velocity, and cinematic clarity.
                I build experiences that feel effortless, expensive, and engineered to convert.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://t.me/yovexor"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-950 transition hover:scale-[1.02]"
                >
                  HIRE @YOVEXOR
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-100 transition hover:bg-cyan-500/15">
                  EXPLORE SYSTEM
                </button>
              </div>

              <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
                {metrics.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4 backdrop-blur-sm">
                    <div className="text-[10px] uppercase tracking-[0.26em] text-slate-400">{item.label}</div>
                    <div className="mt-3 text-lg font-semibold text-cyan-100">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              style={{ x: useTransform(mouseX, [-1, 1], [-18, 18]), y: useTransform(mouseY, [-1, 1], [-18, 18]) }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -inset-10 rounded-[32px] bg-cyan-500/10 blur-3xl" />
              <div className="glass-panel relative overflow-hidden rounded-[30px] border border-cyan-300/20 bg-slate-950/80 p-5 shadow-[0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-md">
                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3 text-[10px] uppercase tracking-[0.28em] text-slate-300">
                  <span>CORE MATRIX</span>
                  <span className="inline-flex items-center gap-2 text-cyan-300">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    ONLINE
                  </span>
                </div>

                <pre className="matrix-rune whitespace-pre-wrap text-[11px] leading-5 tracking-[0.18em] text-cyan-200/90 sm:text-[13px]">
                  {asciiArt}
                </pre>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-3">
                    <Gauge className="h-4 w-4 text-cyan-300" />
                    <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-400">FLOW</div>
                    <div className="mt-1 text-sm font-semibold text-white">UNSTOPPABLE</div>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-3">
                    <ShieldCheck className="h-4 w-4 text-cyan-300" />
                    <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-400">ENGINE</div>
                    <div className="mt-1 text-sm font-semibold text-white">STABLE</div>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-3">
                    <Zap className="h-4 w-4 text-cyan-300" />
                    <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-400">PULSE</div>
                    <div className="mt-1 text-sm font-semibold text-white">ELEVATED</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
