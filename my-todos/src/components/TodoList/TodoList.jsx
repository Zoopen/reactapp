import TodoItem from "../TodoItem/TodoItem";
import React from "react";
export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleCheckbox, handleDelete, finished, unfinished } = this.props;
    return (
      <ul>
        {unfinished.length > 0 && (
          <>
            <h3>未完成</h3>
            {unfinished.map((todo) => (
              <TodoItem
                handleDelete={handleDelete}
                handleCheckbox={handleCheckbox}
                todo={todo}
                key={todo.id}
              />
            ))}
          </>
        )}
        {finished.length > 0 && (
          <>
            <h3>已完成</h3>
            {finished.map((todo) => (
              <TodoItem
                handleDelete={handleDelete}
                handleCheckbox={handleCheckbox}
                todo={todo}
                key={todo.id}
              />
            ))}
          </>
        )}
      </ul>
    );
  }
}
