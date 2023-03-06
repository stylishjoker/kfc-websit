import { Link } from "react-router-dom";
import classes from "./cardFood.module.css";

const CardFood = (props) => {
  const { name, link, path } = props.data;
  return (
    <div className={classes.wrapper}>
      <Link to={path}>
        <img src={link} alt="kfc" />
        <span>
          {name} {">"}
        </span>
      </Link>
    </div>
  );
};

export default CardFood;
