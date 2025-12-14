import { blogPosts, getPost } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// 1. Generate Static Params (Better SEO & Performance)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. The Page Component
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-12 px-4 md:px-6">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Link>

      {/* Article Header */}
      <div className="space-y-4 border-b pb-8 mb-8">
        <div className="flex gap-2 text-sm text-muted-foreground mb-4">
          <span className="bg-secondary px-2 py-1 rounded-md text-secondary-foreground">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            {post.readTime}
          </div>
        </div>
      </div>

      {/* THE CONTENT AREA */}
      {/* The 'prose' class comes from the tailwind typography plugin */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Markdown>{post.content}</Markdown>
      </div>
    </article>
  );
}
