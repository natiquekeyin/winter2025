import React from "react";
import Counter from "./Counter";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", async () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();

    const countElement2 = screen.getByRole("heading");
    expect(countElement2).toHaveTextContent("0");

    const incrementButton2 = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton2);
    await user.click(incrementButton2);
    expect(countElement2).toHaveTextContent("2");

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "20");
    expect(amountInput).toHaveValue(20);

    const setButton = screen.getByRole("button", { name: "Set Amount" });
    await user.click(setButton);
    expect(countElement2).toHaveTextContent("20");
  });
});
