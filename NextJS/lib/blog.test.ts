import { describe, it, expect } from "vitest";
import { getPost, blogPosts } from "./blog";

describe("blogPosts data", () => {
  it("contains at least one post", () => {
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it("each post has required fields", () => {
    for (const post of blogPosts) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.date).toBeTruthy();
      expect(post.readTime).toBeTruthy();
      expect(post.category).toBeTruthy();
      expect(post.content).toBeTruthy();
    }
  });

  it("slugs are unique", () => {
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("getPost", () => {
  it("returns a post matching the slug", () => {
    const first = blogPosts[0];
    const result = getPost(first.slug);
    expect(result).toEqual(first);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getPost("this-does-not-exist")).toBeUndefined();
  });

  it("returns undefined for an empty string", () => {
    expect(getPost("")).toBeUndefined();
  });
});
