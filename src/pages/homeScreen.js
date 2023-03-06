import { useEffect, useState } from "react";

import ScreenLayout from "../components/layout/screenLayout";
import ListFood from "../layout/listFood";
import Sliders from "../layout/slider";
import classes from "./homeScreen.module.css";

import { getData } from "../firebase";

const HomeScreen = () => {
  const [danhMucMonAn, setDanhMucMonAn] = useState([]);
  useEffect(() => {
    const data = getData("DanhMucMonAn");
    console.log(data);
    setDanhMucMonAn();
  }, []);
  console.log(danhMucMonAn);
  return (
    <>
      <ScreenLayout>
        <Sliders />
        <div className={classes.content}>
          <ListFood />
        </div>
      </ScreenLayout>
    </>
  );
};
export default HomeScreen;
