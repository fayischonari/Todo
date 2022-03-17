import styles from "./styles.module.css";
const Todo = (props) => {
  const { todo, toDelete } = props;
  return (
    <div className={styles.todo}>
      <div className={styles.todoItem}>{todo} </div>
      <button className={styles.todoDelete} onClick={() => toDelete(todo)}>
        delete
      </button>
    </div>
  );
};

export default Todo;
