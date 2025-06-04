import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Palette,
  Layers,
  Database,
  GitBranch,
  Smartphone,
} from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-20 container">
      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="outline" className="mb-4">
          My Skills
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Technical Expertise
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          I specialize in frontend development with a focus on creating
          responsive, accessible, and performant web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCard
          icon={<Code />}
          title="Frontend Development"
          skills={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React",
            "React-native",
            "Next.js",
            "Redux",
            "Zustand",
          ]}
        />

        <SkillCard
          icon={<Palette />}
          title="UI/UX Design"
          skills={[
            "Responsive Design",
            "Tailwind CSS",
            "Figma",
            "Ant",
            "Fromspree",
            "MUI",
            "Sass",
          ]}
        />

        <SkillCard
          icon={<Layers />}
          title="Frontend Frameworks"
          skills={["React", "Next.js", "React-native"]}
        />

        <SkillCard
          icon={<GitBranch />}
          title="Tools & Workflow"
          skills={["Git", "GitHub", "Webpack", "Vite"]}
        />
      </div>
    </section>
  );
}

function SkillCard({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
