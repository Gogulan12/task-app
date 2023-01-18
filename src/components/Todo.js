import remove from "../images/delete.png";
// import done from "../images/checked.png";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    //console.log(todo);
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
      {/* <div className="button-container"> */}
      {/* <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
          <img src={done} alt="finished" />
        </button> */}
      <div className="round">
        <input
          type="checkbox"
          onClick={completeHandler}
          className="complete-btn rounded-checkbox"
          // {todo.completed ? input.checked : input.unchecked}
          id="checkbox"
        />
        <label htmlFor="checkbox"></label>
      </div>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={deleteHandler} className="trash-btn">
        {/* <i className="fas fa-trash"></i> */}
        <img src={remove} alt="delete" />
      </button>
      {/* </div> */}
    </div>
  );
};

export default Todo;
