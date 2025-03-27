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

  test("deselectOptions", async () => {
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2" selected>
          B
        </option>
        <option value="3">C</option>
      </select>
    );

    await user.deselectOptions(screen.getByRole("listbox"), "2");
    expect(screen.getByText("B").selected).toBe(false);
  });

  test.only("upload file", async () => {
    render(
      <div>
        <label htmlFor="file-uploader">Upload file:</label>
        <input type="file" id="file-uploader" />
      </div>
    );

    const file = new File(["hello"], "hello.png", { type: "image/png" });
    const input = screen.getByLabelText(/Upload file/i);
    await user.upload(input, file);
    expect(input.files[0]).toBe(file);
    expect(input.files.item(0)).toBe(file);
    expect(input.files).toHaveLength(1);
  });
});
