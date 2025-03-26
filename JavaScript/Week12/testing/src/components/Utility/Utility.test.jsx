import React from "react";

import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import user from "@testing-library/user-event";

describe("Utility", () => {
  test("Clear", async () => {
    render(<textarea defaultValue="Hello, World!" />);
    await user.clear(screen.getByRole("textbox"));
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  test("selectOptions", async () => {
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );
    await user.selectOptions(screen.getByRole("listbox"), ["1", "C"]);
    expect(screen.getByRole("option", { name: "A" }).selected).toBe(true);
    expect(screen.getByRole("option", { name: "B" }).selected).toBe(false);
    expect(screen.getByRole("option", { name: "C" }).selected).toBe(true);
  });
});
