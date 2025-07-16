import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "./CustomButton";
import "@testing-library/jest-dom";

describe("CustomButton", () => {
  it("renders children when not loading", () => {
    render(<CustomButton>Click me</CustomButton>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("renders loader when loading", () => {
    render(<CustomButton loading>Click me</CustomButton>);
    const loader = screen.getByRole("button").querySelector("svg");
    expect(loader).toBeInTheDocument();
  });

  it("disables button when loading", () => {
    render(<CustomButton loading>Load</CustomButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("disables button when explicitly disabled", () => {
    render(<CustomButton disabled>Disabled</CustomButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("sets aria-busy and aria-disabled attributes correctly", () => {
    render(
      <CustomButton loading disabled>
        Test
      </CustomButton>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("responds to click when not disabled", async () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Click</CustomButton>);
    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
