import React from "react";
import Greet from "./Greet";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  render(<Greet />);

  test("Greet Renders Correctly", () => {
    const heading = screen.getByText(/hello/);

    expect(heading).toBeInTheDocument();
  });

  test("Greet Has Word Something", () => {
    const heading = screen.getByText(/something/);

    expect(heading).toBeInTheDocument();
  });
});
