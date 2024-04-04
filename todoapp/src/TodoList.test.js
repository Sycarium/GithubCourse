// TodoList.test.js hehe :p
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders todo items correctly", () => {
  const todos = ["Todo 1", "Todo 2", "Todo 3"];
  const { getByText } = render(<TodoList todos={todos} />);
  todos.forEach((todo) => {
    const todoElement = getByText(todo);
    expect(todoElement).toBeInTheDocument();
  });
});

test("renders no todos message when todos array is empty", () => {
  const { getByText } = render(<TodoList todos={[]} />);
  const noTodosMessage = getByText(/No todos/i);
  expect(noTodosMessage).toBeInTheDocument();
});

test("calls deleteTodo function when delete button is clicked", () => {
  const deleteTodoMock = jest.fn();
  const todos = ["Todo 1", "Todo 2", "Todo 3"];
  const { getAllByTestId } = render(
    <TodoList todos={todos} deleteTodo={deleteTodoMock} />
  );
  const deleteButtons = getAllByTestId("delete-button");
  deleteButtons.forEach((button, index) => {
    fireEvent.click(button);
    expect(deleteTodoMock).toHaveBeenCalledWith(index);
  });
});
