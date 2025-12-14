export interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  content: string; // You can use Markdown here later
  image: string; // Placeholder for project screenshot
}

export const projects: Project[] = [
  {
    slug: "e-commerce-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing products, orders, and analytics.",
    date: "2024",
    tech: ["Next.js 14", "TypeScript", "Prisma", "Stripe"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    image: "/projects/dashboard.jpg", // You can use a placeholder for now
    content: `
      ## The Challenge
      Building a performant dashboard that handles real-time data visualization while maintaining a clean UI.
      
      ## The Solution
      Used React Query for server-state management and Recharts for analytics. Implemented optimistic updates for a snappy user experience.
    `,
  },
  {
    slug: "ai-chat-app",
    title: "AI Chat Application",
    description: "A real-time chat interface powered by OpenAI's GPT-4 API.",
    date: "2023",
    tech: ["React", "Socket.io", "Tailwind CSS", "OpenAI"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    image: "/projects/chat.jpg",
    content: `
      ## The Challenge
      Handling streaming responses from the AI and maintaining chat history context.
      
      ## The Solution
      Leveraged the Vercel AI SDK to handle streaming text responses efficiently.
    `,
  },
  // Add more projects here...
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
