import Link from "next/link";
import { ArrowRight, Github, Linkedin, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Frontend Developer
            <span className="text-primary block mt-2">
              Building modern web experiences
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md">
            I create responsive, user-friendly websites and applications with
            cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
            <Link
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              href="https://t.me/Solikhov_Frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Send className="h-6 w-6" />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 from-primary/20 to-primary/40  flex items-center justify-center">
            <img
              src="/futsal.jpg"
              alt="Developer portrait"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
