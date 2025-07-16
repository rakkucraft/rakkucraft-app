import { render, screen } from "@testing-library/react";
import CustomLink from "./CustomLink";
import "@testing-library/jest-dom";

describe("CustomLink", () => {
  it("renders external link with target and rel", () => {
    render(
      <CustomLink href="https://example.com" className="text-blue-500">
        External Link
      </CustomLink>,
    );

    const link = screen.getByRole("link", { name: "External Link" });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveClass("text-blue-500");
  });

  it("renders internal link without target and rel", () => {
    render(<CustomLink href="/about">About Us</CustomLink>);

    const link = screen.getByRole("link", { name: "About Us" });
    expect(link).toHaveAttribute("href", "/about");
    expect(link).not.toHaveAttribute("target", "_blank");
    expect(link).not.toHaveAttribute("rel", "noopener noreferrer");
  });

  it("preserves caller-defined target and rel attributes", () => {
    render(
      <CustomLink href="/custom" target="_self" rel="author">
        Custom Attributes
      </CustomLink>,
    );

    const link = screen.getByRole("link", { name: "Custom Attributes" });
    expect(link).toHaveAttribute("target", "_self");
    expect(link).toHaveAttribute("rel", "author");
  });
});
