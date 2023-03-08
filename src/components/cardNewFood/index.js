import { Link } from "react-router-dom";
import NewButton from "../newButton";
import classes from "./cardNewFood.module.css";
const CardNewFood = (props) => {
  console.log(props.data);
  const { id, description, link, name, path, price } = props.data;
  return (
    <Link to={`info-food/` + id} className={classes.wrapper}>
      <div className={classes.img}>
        <img src={link} alt="KFC" />
      </div>
      <div className={classes.info}>
        <div className={classes.price}>
          <span>{name}</span>
          <span>{price}</span>
        </div>
        <span>{description}</span>
      </div>
      <NewButton name="Thêm" color="#ccc" />
    </Link>
  );
};

export default CardNewFood;
