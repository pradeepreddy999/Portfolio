import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/lib/data";
import { ArrowLeft, Code2, Globe } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <article className="container mx-auto max-w-3xl py-12 px-4 md:px-6">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Link>

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

        <div className="flex gap-4">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <Code2 className="mr-2 h-4 w-4" /> View Source
            </Button>
          </Link>
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <Globe className="mr-2 h-4 w-4" /> Live Demo
            </Button>
          </Link>
        </div>
      </div>

      <div className="aspect-video w-full bg-muted rounded-xl mb-12 flex items-center justify-center text-muted-foreground border">
        <span>Project Screenshot / Video Demo</span>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Markdown>{project.content}</Markdown>
      </div>
    </article>
  );
}
