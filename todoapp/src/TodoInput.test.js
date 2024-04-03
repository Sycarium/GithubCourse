// TodoInput.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoInput from "./TodoInput";

test("renders input field and add button", () => {
  const { getByPlaceholderText, getByText } = render(<TodoInput />);
  const inputField = getByPlaceholderText(/Add a new todo/i);
  const addButton = getByText(/Add/i);
  expect(inputField).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test("calls addTodo function when Add button is clicked", () => {
  const addTodoMock = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <TodoInput addTodo={addTodoMock} />
  );
  const inputField = getByPlaceholderText(/Add a new todo/i);
  const addButton = getByText(/Add/i);
  fireEvent.change(inputField, { target: { value: "New Todo" } });
  fireEvent.click(addButton);
  expect(addTodoMock).toHaveBeenCalledWith("New Todo");
});

test("does not call addTodo function when input is empty and Add button is clicked", () => {
  const addTodoMock = jest.fn();
  const { getByText } = render(<TodoInput addTodo={addTodoMock} />);
  const addButton = getByText(/Add/i);
  fireEvent.click(addButton);
  expect(addTodoMock).not.toHaveBeenCalled();
});
