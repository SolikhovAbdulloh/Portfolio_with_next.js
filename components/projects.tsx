import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Here are some of my recent projects that showcase my skills and
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Animation Website"
            description="A website built with Next.js and Tailwind CSS about animation"
            image="/heros_page1.png"
            tags={["Next.js", "React", "Tailwind CSS", "Stripe"]}
            demoLink="https://profoilio-by-ilhom.vercel.app/"
            repoLink="https://github.com/dashboard"
          />

          <ProjectCard
            title="Dashboard UI"
            description="An admin dashboard with dark mode, data visualization, and responsive design, built using React and Chart.js."
            image="/placeholder.svg?height=300&width=500"
            tags={["React", "Chart.js", "Styled Components"]}
            demoLink="#"
            repoLink="#"
          />
          <ProjectCard
            title="Social Media App"
            description="A social platform with real-time messaging, post creation, and user authentication using Firebase."
            image="/placeholder.svg?height=300&width=500"
            tags={["React", "Firebase", "Tailwind CSS"]}
            demoLink="https://green-shop-project-ts-npyh.vercel.app/Home#"
            repoLink="https://github.com/dashboard"
          />
          <ProjectCard
            title="Portfolio Website"
            description="A creative portfolio website with smooth animations and 3D elements using Three.js."
            image="/placeholder.svg?height=300&width=500"
            tags={["Next.js", "Three.js", "GSAP"]}
            demoLink="#"
            repoLink="#"
          />
          <ProjectCard
            title="Weather App"
            description="A weather application with location detection, 5-day forecast, and beautiful UI transitions."
            image="/placeholder.svg?height=300&width=500"
            tags={["React", "OpenWeather API", "Framer Motion"]}
            demoLink="#"
            repoLink="#"
          />
          <ProjectCard
            title="Task Management Tool"
            description="A Kanban-style task management application with drag-and-drop functionality and user authentication."
            image="/placeholder.svg?height=300&width=500"
            tags={["React", "Redux", "React DnD"]}
            demoLink="#"
            repoLink="#"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  demoLink,
  repoLink,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
}) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="pt-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t p-4 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={demoLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={repoLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
