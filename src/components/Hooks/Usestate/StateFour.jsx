import React, {useState} from "react";
import styles from "../../../styles/todo.module.css"

const StateFour = () => {
  const [todos, setTodos] = useState([]);

  const initialState = {
    text: "",
    detail: "",
    startTIme: "",
    endTime: "",
  };
  const [data, setData] = useState(initialState);
  const handleTodoUpdate = (e) => {
    e.preventDefault();
    setTodos([...todos, data])
    console.log("data",data);
    console.log("todos",todos)
    setData(initialState);
  };
  return (
    <section className={styles.container}>
      <h1 className={styles.todo}>Todo Lists</h1>
      <main className={styles.main}>
        {todos.length === 0 ? (
          <h2 className="">There is Nothing in the todo list</h2>
        ) : (
          <ul className={styles.listcontainer}>
            {todos.map((todo, index) => (
              <li className={styles.list} key={index}>
                <h3 >{todo.text}</h3>
                <p>{todo.detail}</p>
                <div>
                  <span>start: {todo.startTIme}</span>
                  <span>End: {todo.endTime}</span>
                </div>
                <button type="button">Delete Todo</button>
              </li>
            ))}
          </ul>
        )}
      </main>
      <form className={styles.form} onSubmit={handleTodoUpdate}>
        <input
          type="text"
          placeholder="Enter text"
          value={data.text}
          onChange={(e) => setData({...data, text: e.target.value})}
        />
        <textarea
          placeholder="Enter todo details"
          value={data.detail}
          onChange={(e) => setData({...data, detail: e.target.value})}
        ></textarea>
        <input
          type="datetime-local"
          name=""
          id=""
          placeholder="enter start date"
          value={data.startTIme}
          onChange={(e) => setData({...data, startTIme: e.target.value})}
        />
        <input
          type="datetime-local"
          placeholder="Enter end date"
          value={data.endTime}
          onChange={(e) => setData({...data, endTime: e.target.value})}
        />
        <button type="submit">Create todo</button>
      </form>
    </section>
  );
};

export default StateFour;
