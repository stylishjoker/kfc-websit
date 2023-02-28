import Close from "../../icon/close";
import classes from "./navMenu.module.css";

const NavMenu = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.close} onClick={props.callback}>
          <Close />
          <div className={classes.lineRed}></div>
          <div className={classes.lineRed}></div>
          <div className={classes.lineRed}></div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
