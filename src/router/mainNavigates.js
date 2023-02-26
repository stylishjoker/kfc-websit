import { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./mainNavigates.module.css";
import LogoKFC from "../icon/logoKFC";
import ObjectNavigates from ".";

const MainNavigates = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className={classes.wrapper}>
      <ul>
        {ObjectNavigates.map((item) => {
          if (item.id === 1) {
            return (
              <li key={item.id} onClick={() => setSelected(item.id)}>
                <Link to={item.path}>
                  <LogoKFC />
                </Link>
              </li>
            );
          } else {
            return (
              <li key={item.id} onClick={() => setSelected(item.id)}>
                <Link className={classes.hover} to={item.path}>
                  {item.name}
                </Link>
                <div
                  className={` ${item.id === selected ? classes.select : ""} ${
                    classes.line
                  }`}
                ></div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
export default MainNavigates;
