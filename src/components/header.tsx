import { Link } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";
import { Cloud } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="https://cloudi-taupe.vercel.app/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
          <Cloud className="w-6 h-6 text-[rgb(96,165,250)]" />
          <h1 className="text-2xl font-bold text-[rgb(96,165,250)]">CloudEye</h1>
        </Link>

        <div className="flex gap-4 items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
