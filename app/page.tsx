import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/data";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // (Get the first 3, or filter by a 'featured' flag)
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col items-center justify-center space-y-10 py-24 md:py-32 lg:py-40 text-center container mx-auto px-4">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Building digital products, <br className="hidden sm:inline" />
            <span className="text-primary">one pixel at a time.</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            I&apos;m a Full Stack Developer passionate about building
            accessible, pixel-perfect, and performant web experiences.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#contact">
            <Button size="lg" className="font-semibold">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://github.com/pradeepreddy999" target="_blank">
            <Button variant="outline" size="lg">
              GitHub
            </Button>
          </Link>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Right side: Image Placeholder or Abstract Graphic */}
            <div className="relative aspect-square lg:aspect-video overflow-hidden rounded-xl bg-linear-to-br from-primary/20 via-secondary/20 to-muted border border-border flex items-center justify-center">
              <span className="text-muted-foreground font-medium">
                [ Your Profile Image Here ]
              </span>
            </div>

            {/* Left side: Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  About Me
                </h2>
                <p className="text-muted-foreground">
                  A glimpse into who I am and what I do.
                </p>
              </div>

              <div className="space-y-4 text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                <p>
                  I specialize in React, Next.js, and TypeScript. With over 4
                  years of experience, I have a deep understanding of modern web
                  architecture and UI/UX principles.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m likely exploring new
                  open-source tools, writing technical blogs, or contributing to
                  the community.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4">
                <h3 className="text-sm font-semibold mb-3 text-foreground">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React 18, 19",
                    "TypeScript",
                    "Next.js 16",
                    "Tailwind CSS v4",
                    "BootStrap 5",
                    "SQL Server",
                    "ASP.NET MVC",
                    ".NET 8",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-1 text-sm bg-background border rounded-full shadow-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section id="projects" className="py-24 container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            A selection of my favorite projects. Check out the case studies to
            learn how I built them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card
              key={project.slug}
              className="flex flex-col h-full hover:border-primary/50 transition-colors"
            >
              {/* Image Placeholder */}
              <div className="aspect-video w-full bg-muted rounded-t-lg flex items-center justify-center text-muted-foreground border-b">
                Project Image
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {/* Show only first 3 tags to keep card clean */}
                  {project.tech.slice(0, 3).map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="font-normal text-xs"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter>
                <Link href={`/projects/${project.slug}`} className="w-full">
                  <Button variant="outline" className="w-full group">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button size="lg" variant="secondary">
              View All Projects <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 container px-4 md:px-6 mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get in touch
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Have a project in mind or just want to say hi? I&apos;m always
                open to discussing new opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-muted">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    pradeeppalavalli1999@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                {/* Social Links */}
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
              <CardDescription>
                I&apos;ll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
