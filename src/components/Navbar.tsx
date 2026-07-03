"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#formacion", label: "Formación y Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const reduce = useReducedMotion();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(link.href);
        },
        { rootMargin: "-45% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="font-mono text-sm font-semibold tracking-tight text-ink"
        >
          RR
        </a>

        <button
          className="relative z-10 sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? (
            <X className="h-5 w-5 text-ink" weight="bold" />
          ) : (
            <List className="h-5 w-5 text-ink" weight="bold" />
          )}
        </button>

        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative block px-4 py-2 text-sm">
                {active === link.href &&
                  (reduce ? (
                    <span className="absolute inset-0 rounded-full bg-subtle" />
                  ) : (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-subtle"
                      transition={{
                        type: "spring",
                        duration: 0.5,
                        bounce: 0.15,
                      }}
                    />
                  ))}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    active === link.href
                      ? "text-ink font-medium"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-4 right-4 mt-2 rounded-2xl border border-border bg-surface/95 backdrop-blur-xl p-2 sm:hidden"
            >
              <ul className="flex flex-col gap-0.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-sm transition-colors duration-200 ${
                        active === link.href
                          ? "bg-subtle font-medium text-ink"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
