import Close from "../../icon/close";
import FooterMenu from "../footerMenu";
import OptionMenu from "../optionMenu";
import classes from "./navMenu.module.css";
import { ObjectMenus } from "./objectMenu";

const NavMenu = (props) => {
  return (
    <div
      className={classes.wrapper}
      style={props.show === true ? { right: "0" } : { right: "-350px" }}
    >
      <div className={classes.header}>
        <div className={classes.close} onClick={props.callback}>
          <Close />
          <div className={classes.lineRed}></div>
          <div className={classes.lineRed}></div>
          <div className={classes.lineRed}></div>
        </div>
      </div>
      <div className={classes.content}>
        {ObjectMenus.map((item, index) => {
          return <OptionMenu key={index} {...item} />;
        })}
        <FooterMenu />
      </div>
    </div>
  );
};

export default NavMenu;
