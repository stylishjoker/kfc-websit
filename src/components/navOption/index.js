import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./navOption.module.css";
import LogoUser from "../../icon/logoUser";
import MenuButton from "../menuButton";
import NewButton from "../newButton";
import LogoCart from "../../icon/cartKFC";
import { scrollBtnSelector } from "../../app/store";

const NavOption = (props) => {
  const scrollPosition = useSelector(scrollBtnSelector);
  return (
    <div className={classes.wrapper}>
      <div
        style={scrollPosition < 70 ? { display: "none" } : { display: "block" }}
      >
        <NewButton name="Bắt đầu đặt hàng" color="red" />
      </div>
      <div className={classes.user}>
        <Link>
          <LogoUser />
        </Link>
      </div>
      <div className={classes.user}>
        <Link>
          <LogoCart />
        </Link>
        <div className={classes.total} onClick={() => console.log("hehe")}>
          <span>1</span>
        </div>
      </div>
      <MenuButton callback={props.callback} />
    </div>
  );
};

export default NavOption;
