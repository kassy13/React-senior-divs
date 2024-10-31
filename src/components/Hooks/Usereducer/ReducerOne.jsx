import {Hand} from "@phosphor-icons/react/dist/ssr";
import React, {useReducer, useState} from "react";

// const intialstate = [];
const intialstate = {
  todos: [],
  intialinputvalue: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_Task":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            // task: action.payload,
            task: state.intialinputvalue, //hello
          },
        ],
        intialinputvalue: "", //clear the input after adding the task
      };

    case "SET_INPUT_VALUE":
      return {
        ...state,
        intialinputvalue: action.payload,
      };

    case "DELETE_TASK":
      return {
        ...state,
        todos: state.todos.filter((del) => del.id !== action.payload),
      };
    //   return state.filter((del) => del.id !== action.payload); for when using arrays
    //todo.filter((del) => del.id == action.payload)
    case "RESET_TODOS":
      return intialstate;
    //   return action.payload;
  }
};
const ReducerOne = () => {
  // const [todos,seTtodos] =useState(initialvalues)

  const [todos, dispatch] = useReducer(reducer, intialstate);
  //   const handleInputBlur = (e) => {
  //     const value = e.target.value.trim();
  //     if (value) {
  //       dispatch({type: "SET_INPUT_VALUE", payload: value});
  //       dispatch({type: "ADD_Task"});
  //     }
  //   };
  console.log(todos);
  return (
    <div>
      <h4>Todo List: {todos.todos.length}</h4>
      <h4>Add New task</h4>
      <input
        type="text"
        placeholder="Enter todo"
        className="boder border-purple-950"
        value={todos.intialinputvalue}
        onChange={(e) =>
          dispatch({type: "SET_INPUT_VALUE", payload: e.target.value})
        }
        onBlur={(e) => dispatch({type: "ADD_Task", payload: e.target.value})}
        // onBlur={handleInputBlur}
      />
      <hr />
      {todos.todos.map((todo) => (
        <li key={todo.id}>
          {todo.task}
          <span>
            <button
              onClick={() => dispatch({type: "DELETE_TASK", payload: todo.id})}
              className="bg-red-900"
            >
              Delete
            </button>
          </span>
        </li>
      ))}
      <button
        onClick={() => dispatch({type: "RESET_TODOS", payload: intialstate})}
      >
        RESET TODOS
      </button>
    </div>
  );
};

export default ReducerOne;
