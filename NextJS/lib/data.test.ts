import { describe, it, expect } from "vitest";
import { getProject, projects } from "./data";

describe("projects data", () => {
  it("contains at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("each project has required fields", () => {
    for (const project of projects) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.tech).toBeInstanceOf(Array);
      expect(project.tech.length).toBeGreaterThan(0);
    }
  });

  it("slugs are unique", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("getProject", () => {
  it("returns a project matching the slug", () => {
    const first = projects[0];
    const result = getProject(first.slug);
    expect(result).toEqual(first);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProject("this-does-not-exist")).toBeUndefined();
  });

  it("returns undefined for an empty string", () => {
    expect(getProject("")).toBeUndefined();
  });
});
