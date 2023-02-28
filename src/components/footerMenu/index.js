import classes from "./footerMenu.module.css";
import Facebook from "../../icon/facebook";
import Instagram from "../../icon/instagram";
import Youtube from "../../icon/youtube";
import Twitter from "../../icon/twitter";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  const listIcon = [<Facebook />, <Instagram />, <Youtube />, <Twitter />];

  return (
    <div className={classes.wrapper}>
      <ul className={classes.icon}>
        {listIcon.map((item, index) => {
          return (
            <li key={index}>
              <Link>{item}</Link>
            </li>
          );
        })}
      </ul>
      <span>Copyright © 2023 KFC Vietnam</span>
      <div className={classes.lineRed}></div>
      <div className={classes.lineRed}></div>
      <div className={classes.lineRed}></div>
    </div>
  );
};

export default FooterMenu;
