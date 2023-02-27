import { Link } from "react-router-dom";

import classes from "./navOption.module.css";
import LogoUser from "../../icon/logoUser";
import MenuButton from "../menuButton";
import NewButton from "../newButton";
import LogoCart from "../../icon/cartKFC";

const NavOption = (props) => {
  return (
    <div className={classes.wrapper}>
      <NewButton name="Bắt đầu đặt hàng" color="red" />
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
