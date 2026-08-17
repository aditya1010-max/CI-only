import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Greeting } from "./Greeting";

describe("Greeting", () => {
  it("renders the user's name", () => {
    render(<Greeting name="Adi" />);

expect(screen.getByRole("heading")).toHaveTextContent(
  "Hello, Adi",
);
  });
});