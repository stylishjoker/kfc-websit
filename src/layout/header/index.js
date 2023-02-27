import classes from "./header.module.css";
import MainNavigates from "../../router/mainNavigates";
import NavOption from "../../components/navOption";

const Header = () => {
  return (
    <header className={classes.wrapper}>
      <div className={classes.content}>
        <MainNavigates />
        <NavOption callback={() => console.log("hehe")} />
      </div>
    </header>
  );
};
export default Header;
