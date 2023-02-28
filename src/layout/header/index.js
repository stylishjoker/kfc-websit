import { useState } from "react";

import classes from "./header.module.css";
import MainNavigates from "../../router/mainNavigates";
import NavOption from "../../components/navOption";
import NavMenu from "../../components/navMenu";

const Header = () => {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <header className={classes.wrapper}>
      <div className={classes.content}>
        <MainNavigates />
        <NavOption callback={() => setShow(!show)} />
        <NavMenu show={show} callback={() => setShow(!show)} />
      </div>
    </header>
  );
};
export default Header;
