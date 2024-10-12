import React from "react";
import { useSelector,useDispatch, } from "react-redux";
import { removeTodo } from "../features/Todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  console.log(todos);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-2xl font-bold mb-4">Todos :</div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white shadow-md rounded px-4 py-2 mb-2 flex items-center space-x-4"
        >
          <span>{todo.text}</span>
            <button className="text-red-500" onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
            </button>
        </div>
      ))}
    </div>
  );
};
export default Todos;
