import LogoMenu from "../../icon/logoMenu";
import classes from "./menuButton.module.css";

const MenuButton = (props) => {
  return (
    <div className={classes.wrapper} onClick={props.callback}>
      <LogoMenu />
    </div>
  );
};
export default MenuButton;
