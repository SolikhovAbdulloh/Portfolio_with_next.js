import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Journey as a Frontend Developer</h2>
          <p className="text-muted-foreground max-w-2xl">
            I'm passionate about creating beautiful, functional, and accessible web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Background</h3>
              <p className="text-muted-foreground">
                With a background in design and computer science, I bring a unique perspective to frontend development,
                focusing on both aesthetics and functionality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Approach</h3>
              <p className="text-muted-foreground">
                I believe in user-centered design and development, creating interfaces that are intuitive, accessible,
                and delightful to use.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">Philosophy</h3>
              <p className="text-muted-foreground">
                I'm committed to continuous learning and staying up-to-date with the latest frontend technologies and
                best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
