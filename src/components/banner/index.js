import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import NewButton from "../newButton";
import classes from "./banner.module.css";
import { setScrollBtn } from "../../feature/scrollBtn";
import { scrollBtnSelector } from "../../app/store";

const Banner = () => {
  const dispatch = useDispatch();

  const scrollPosition = useSelector(scrollBtnSelector);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      dispatch(setScrollBtn(position));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={classes.wrapper}>
      <span>Đặt Ngay</span>
      <div className={`${classes.icon}` + ` ${classes.delivery}`}></div>
      <span>Giao Hàng</span>
      <div className={`${classes.icon}` + ` ${classes.bakery}`}></div>
      <span>hoặc Mang Đi</span>
      <div style={scrollPosition > 70 ? { display: "none" } : {}}>
        <NewButton name="Bắt đầu đặt hàng" color="red" />
      </div>
    </div>
  );
};
export default Banner;
