import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Counter } from "./Counter";

describe("Counter", () => {
  it("increments the count when the button is clicked", async () => {
    render(<Counter />);

    expect(screen.getByText("Count: 0")).toBeInTheDocument();

    const button = screen.getByRole("button", {
      name: "Increment",
    });

    await button.click();

    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});