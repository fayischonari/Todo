import styles from "./styles.module.css";

const Button = (props) => {
  const { title, onClick } = props;
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
