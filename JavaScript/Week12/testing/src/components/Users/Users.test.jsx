import React from "react";
import Users from "./Users";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

describe("Users", () => {
  const users = ["Alan Smith", "Bob Smith", "Christina", "Doug "];

  test("Users renders correctly", async () => {
    render(<Users users={users} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(4);

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();

    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });

    expect(startLearningButton).not.toBeInTheDocument();

    const startLearningButton1 = await screen.findByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton1).toBeInTheDocument();
  });
});
