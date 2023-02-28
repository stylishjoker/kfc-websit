import { Link } from "react-router-dom";
import classes from "./optionMenu.module.css";

const OptionMenu = (props) => {
  return (
    <div className={classes.wrapper}>
      <h3>{props.name}</h3>
      <ul className={classes.listItems}>
        {props.options.map((item, index) => (
          <li key={index}>
            <Link>{item.nameOption + "   >"}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionMenu;
