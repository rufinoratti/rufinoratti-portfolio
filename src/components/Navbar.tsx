"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";

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

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="font-mono text-sm font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          RR
        </a>

        <button
          type="button"
          className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full sm:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onClick={() => setOpen(!open)}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
              <a
                href={link.href}
                aria-current={active === link.href ? "page" : undefined}
                className="relative block rounded-full px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
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

        <Link
          href="/cv"
          className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition-[border-color,transform] duration-200 ease-out-expo hover:border-ink active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:block"
        >
          Ver CV
        </Link>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation"
              initial={reduce ? false : { opacity: 0, transform: "translateY(-8px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              exit={{ opacity: 0, transform: "translateY(-8px)" }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-4 right-4 mt-2 rounded-2xl border border-border bg-surface/95 backdrop-blur-xl p-2 sm:hidden"
            >
              <ul className="flex flex-col gap-0.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active === link.href ? "page" : undefined}
                      className={`block rounded-xl px-4 py-3 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                        active === link.href
                          ? "bg-subtle font-medium text-ink"
                          : "text-muted hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    href="/cv"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    Ver CV
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
