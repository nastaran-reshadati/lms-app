import { describe } from "node:test";
import { Button } from ".";
import { ReactDOM } from "react";
import { render, screen } from "@testing-library/react";

describe("Button component", () => {
  test("renders a default button", () => {
    const { getByText } = render(<Button>click here</Button>);
    expect(getByText("click here")).toBeInTheDocument();
  });

  test("disabled button when isDisabled is true", () => {
    render(<Button isDisabled={true}>click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("iLoading button when isLoading is true", () => {
    render(<Button isLoading={true}>click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("pointer-events-none");
  });
  test("applied the correct class for variants", () => {
    const { rerender } = render(<Button variant="primary">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });
  test("Checking sm button size", () => {
    render(<Button size="small">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-sm");
  });
  test("Checking xs button size", () => {
    render(<Button size="tiny">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-xs");
  });
  test("applies the correct class for shape", () => {
    render(<Button shape="wide">Click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-wide");
  });
});
