import Link from "next/link";
import { Github, Mail, Twitter, Send } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-bold text-xl">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Creating beautiful web experiences
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Link
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>

              <Link
                href="https://t.me/Solikhov_Frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} SolikhovAbdulloh.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
