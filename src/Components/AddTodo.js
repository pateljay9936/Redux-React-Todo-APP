"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";
import Todos from "./Todos";


const AddTodo = () => {
  const [input, setInput] = useState("");
    const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    console.log("addtodo");
    dispatch(addTodo(input))
    setInput("");

  };

  return (
    <div className="grid grid-rows-2  items-center justify-center h-screen bg-gray-200">
      <form 
        onSubmit={addTodoHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Todo Title:  UPDATED 2
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="title"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline z-10"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="">
        <Todos />
      </div>
    </div>
  );
};

export default AddTodo;
