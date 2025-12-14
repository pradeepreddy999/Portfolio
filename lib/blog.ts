export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string; // We will use Markdown-like string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-chose-nextjs-16",
    title: "Why I Switched to Next.js 16 for My Portfolio",
    excerpt:
      "Exploring the new features in Next.js 16 including Server Actions and the App Router stability.",
    date: "2024-12-10",
    readTime: "5 min read",
    category: "Tech",
    content: `## Introduction
Next.js 16 has revolutionized how we build React applications. In this post, I'll share my experience migrating from Pages Router to App Router.

## The Power of Server Components
The biggest shift is the mental model. Everything is a server component by default. This means:
* Zero bundle size for server logic
* Direct database access
* Better initial page load performance

## Server Actions
Gone are the days of creating a separate API route just to handle a form submission. Now, we can just write a function...`,
  },
  {
    slug: "mastering-shadcn-ui",
    title: "Building Accessible UIs with shadcn/ui",
    excerpt:
      "A deep dive into why owning your component code is better than using a compiled library.",
    date: "2024-11-28",
    readTime: "7 min read",
    category: "Design",
    content: `## What is shadcn/ui?
It's not a component library. It's a collection of re-usable components that you can copy and paste into your apps.

## Why I love it
1. **Full Control**: The code lives in your repo.
2. **Tailwind First**: Styling is trivial.
3. **Accessibility**: It uses Radix UI primitives under the hood.`,
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
