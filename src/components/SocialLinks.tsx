import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";

const links = [
  {
    href: "https://github.com/rufinoratti",
    label: "GitHub",
    icon: GithubLogo,
  },
  {
    href: "https://www.linkedin.com/in/rufinoratti",
    label: "LinkedIn",
    icon: LinkedinLogo,
  },
  {
    href: "mailto:rufinorattiedu@gmail.com",
    label: "Email",
    icon: Envelope,
  },
];

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className ?? ""}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition-all duration-200 ease-out-expo hover:border-ink hover:text-ink active:scale-[0.97]"
          aria-label={link.label}
        >
          <link.icon weight="bold" className="h-4 w-4" />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}