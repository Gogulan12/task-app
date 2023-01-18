import Todo from "./Todo.js";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  //console.log(todos);
  return (
    <div className="todo-container wrapper">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
