import CardFood from "../../components/cardFood/inde";
import classes from "./listFood.module.css";

const ListFood = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        {props.data.map((item) => {
          return <CardFood key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default ListFood;
