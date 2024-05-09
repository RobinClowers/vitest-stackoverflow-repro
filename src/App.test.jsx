import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("This test will fail", () => {
  it("fails", async () => {
    render(<App />);

    expect(screen.getByText(1234)).toBeTruthy();
  });
});
