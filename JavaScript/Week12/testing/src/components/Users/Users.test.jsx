import React from "react";
import Users from "./Users";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Users", () => {
  const users = ["Alan Smith", "Bob Smith", "Christina", "Doug "];

  test("Users renders correctly", () => {
    render(<Users users={users} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(4);
  });
});
