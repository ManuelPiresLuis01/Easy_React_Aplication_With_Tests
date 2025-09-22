import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Title from "../../src/components/title-component";

describe("Title Component", () => {
  test("renders the title with correct text", () => {
    render(<Title />);
    const titleElement = screen.getByText("Task Lisk");
    expect(titleElement).toBeInTheDocument();
  });
});
