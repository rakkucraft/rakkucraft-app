import { render, screen } from "@testing-library/react";
import { ErrorMessages } from "./ErrorMessages";
import "@testing-library/jest-dom";

jest.mock("@/lib/i18n/client", () => ({
  useLanguage: () => ({ lang: "en" }),
  useTranslation: () => ({
    t: (key: string) => `translated: ${key}`,
  }),
}));

describe("ErrorMessages", () => {
  it("renders multiple error messages", () => {
    const errors = ["required", "invalid"];
    render(<ErrorMessages errors={errors} />);
    expect(screen.getByText("translated: required")).toBeInTheDocument();
    expect(screen.getByText("translated: invalid")).toBeInTheDocument();
  });

  it("returns null when errors are an empty array", () => {
    const { container } = render(<ErrorMessages errors={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("returns null when errors are undefined", () => {
    const { container } = render(<ErrorMessages />);
    expect(container.firstChild).toBeNull();
  });
});
