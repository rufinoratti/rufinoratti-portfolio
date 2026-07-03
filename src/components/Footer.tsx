export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-sm text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Rufino Ratti</p>
        <p>Diseño y desarrollo web | Rufino Ratti</p>
      </div>
    </footer>
  );
}
