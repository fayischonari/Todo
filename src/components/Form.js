import styles from "./styles.module.css";

const Form = (props) => {
  const { title, toDo,value } = props;
  return (
    <div>
      {/* <input
        type="text"
        id="lname"
        name="lname"
        value=""
        className={styles.form}
      /> */}
      <input value={value} type="text" name="todoName" className={styles.form} onChange={toDo}></input>
    </div>
  );
};

export default Form;
