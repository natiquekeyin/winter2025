import React from "react";
import AddPeriod from "./AddPeriod";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Add Period", () => {
  test("Add period renders correctly", () => {
    render(<AddPeriod />);
    const txtElement = screen.getByText("Add Period");
    expect(txtElement).toBeInTheDocument();
    const txtElement2 = screen.getByText("Hello");
    expect(txtElement2).toBeInTheDocument();
  });

  test("Add Period renders the given name with a period", () => {
    render(<AddPeriod name="Alex" />);
    const txtElement = screen.getByText("Hello Alex.");
    expect(txtElement).toBeInTheDocument();
  });
});
