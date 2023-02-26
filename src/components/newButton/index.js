import classes from "./newButton.module.css";

const NewButton = (props) => {
  const { color, name, callback } = props;
  return (
    <div
      onClick={callback}
      style={{ backgroundColor: color }}
      className={classes.wrapper}
    >
      <span>{name}</span>
    </div>
  );
};
export default NewButton;
