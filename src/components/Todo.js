import remove from "../images/delete.png";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <div className="round">
        <input
          type="checkbox"
          onClick={completeHandler}
          className="complete-btn rounded-checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox"></label>
      </div>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={deleteHandler} className="trash-btn">
        <img src={remove} alt="delete" />
      </button>
    </div>
  );
};

export default Todo;
