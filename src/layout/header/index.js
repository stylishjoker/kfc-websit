import { useState } from "react";

import classes from "./header.module.css";
import MainNavigates from "../../router/mainNavigates";
import NavOption from "../../components/navOption";
import NavMenu from "../../components/navMenu";

const Header = () => {
  const [show,setShow] = useState(true)

  return (
    <header className={classes.wrapper}>
      <div className={classes.content}>
        <MainNavigates />
        <NavOption callback={() => console.log("show")} />
        <NavMenu callback = {()=>console.log("close")}/>
      </div>
    </header>
  );
};
export default Header;
