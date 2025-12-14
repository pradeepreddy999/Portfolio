import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/lib/data";
import { ArrowLeft, Github, Globe } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// 1. Static Generation (Optional but recommended for speed/SEO)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 2. The Page Component
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params; // In Next.js 16, params must be awaited
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-12 px-4 md:px-6">
      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Link>

      {/* Header Section */}
      <div className="space-y-6 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-4 items-center justify-between border-b pb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="outline" className="text-sm py-1">
                {t}
              </Badge>
            ))}
          </div>
          <span className="text-muted-foreground font-medium">
            {project.date}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link href={project.githubUrl} target="_blank">
            <Button>
              <Github className="mr-2 h-4 w-4" /> View Source
            </Button>
          </Link>
          <Link href={project.demoUrl} target="_blank">
            <Button variant="outline">
              <Globe className="mr-2 h-4 w-4" /> Live Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="aspect-video w-full bg-muted rounded-xl mb-12 flex items-center justify-center text-muted-foreground border">
        {/* <Image src={project.image} ... /> */}
        <span>Project Screenshot / Video Demo</span>
      </div>

      {/* Content Section */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        {/* We are rendering raw strings with newlines for now. 
            Later you can use 'react-markdown' to render actual markdown. */}
        {project.content.split("\n").map((line, i) => {
          // Simple logic to bold headers (Lines starting with ##)
          if (line.trim().startsWith("##")) {
            return (
              <h2 key={i} className="text-2xl font-bold mt-8 mb-4">
                {line.replace("##", "")}
              </h2>
            );
          }
          return (
            <p key={i} className="mb-4 leading-relaxed">
              {line}
            </p>
          );
        })}
      </div>
    </article>
  );
}
