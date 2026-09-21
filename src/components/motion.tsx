import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

export function Reveal({
  children,
  className,
}: RevealProps) {
  return <div className={className}>{children}</div>;
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  staggerIndex?: number;
};

export function RevealStagger({
  children,
  className,
}: RevealStaggerProps) {
  return <div className={className}>{children}</div>;
}
