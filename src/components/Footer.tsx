export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/15 text-xs font-bold text-primary ring-1 ring-primary/30">
            PS
          </span>
          <span>© {new Date().getFullYear()} Pranav Suryawanshi</span>
        </div>
        <div>Crafted with intention · Latur → Everywhere</div>
      </div>
    </footer>
  );
}
