import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rufinoratti-portfolio.vercel.app"),
  title: "Rufino Ratti | Desarrollador Full Stack",
  description:
    "Portfolio de Rufino Ratti, desarrollador full stack. Proyectos web, experiencia y contacto.",
  keywords: [
    "Rufino Ratti",
    "desarrollador full stack",
    "desarrollador web",
    "React",
    "Next.js",
    "portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Rufino Ratti",
    title: "Rufino Ratti | Desarrollador Full Stack",
    description:
      "Portfolio de Rufino Ratti: proyectos web, experiencia y contacto.",
  },
  twitter: {
    card: "summary",
    title: "Rufino Ratti | Desarrollador Full Stack",
    description:
      "Portfolio de Rufino Ratti: proyectos web, experiencia y contacto.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#contenido-principal"
          className="sr-only fixed left-6 top-4 z-[70] rounded-full bg-ink px-4 py-2 text-sm font-medium text-surface focus:not-sr-only focus:outline-2 focus:outline-offset-4 focus:outline-accent"
        >
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
