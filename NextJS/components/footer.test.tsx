import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "./footer";

describe("Footer", () => {
  it("renders the author name", () => {
    render(<Footer />);
    expect(screen.getByText(/Pradeep Palavalli/i)).toBeInTheDocument();
  });

  it("displays the current year", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("mentions the tech stack", () => {
    render(<Footer />);
    expect(screen.getByText(/Next\.js/i)).toBeInTheDocument();
  });
});
