import classes from "./header.module.css";
import MainNavigates from "../../router/mainNavigates";
import NavOption from "../../components/navOption";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <MainNavigates />
      <NavOption />
    </div>
  );
};
export default Header;
