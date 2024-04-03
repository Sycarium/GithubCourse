import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders todo app title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/React Todo App/i);
  expect(titleElement).toBeInTheDocument();
});

test("adds todo item to the list when 'Add' button is clicked", () => {
  const { getByText, getByRole } = render(<App />);
  const inputElement = getByRole("textbox");
  const addButton = getByText("Add");

  // Add a todo item
  fireEvent.change(inputElement, { target: { value: "Test todo" } });
  fireEvent.click(addButton);

  // Check if the todo item is added to the list
  const todoElement = getByText("Test todo");
  expect(todoElement).toBeInTheDocument();
});

test("does not add empty todo item to the list", () => {
  const { getByText, getByRole } = render(<App />);
  const inputElement = getByRole("textbox");
  const addButton = getByText("Add");

  // Add an empty todo item
  fireEvent.change(inputElement, { target: { value: "" } });
  fireEvent.click(addButton);

  // Check if the empty todo item is not added to the list
  const todoElement = getByText("Test todo");
  expect(todoElement).not.toBeInTheDocument();
});
