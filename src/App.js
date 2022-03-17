import React, { useState } from "react";

import Title from "./components/Title";
import SubTitle from "./components/SubTitle";
import Form from "./components/Form";
import Button from "./components/Button";
import Todo from "./components/Todo";

import styles from "./styles.module.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addToDo = () => {
    // setTodo("Btn Clicked");
    setTodos([...todos, todo]);
    setTodo("");
  };

  // console.log(todos);
  console.log(todo);
  const onClickDelete = (todo) => {
    setTodos(todos.filter((todoItem) => todoItem != todo));
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.content}>
        <Title title={"To-do-App !"} />
        <SubTitle subTitle={"Add New To-Do"} />
        {todos.map((todo) => (
          <Todo todo={todo} toDelete={onClickDelete} />
        ))}

        <Form
        value={todo}
          toDo={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button title={"ADD"} onClick={addToDo} />
      </div>
    </div>
  );
}

export default App;
