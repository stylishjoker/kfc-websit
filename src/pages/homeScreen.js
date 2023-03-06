import { useEffect, useState } from "react";

import ScreenLayout from "../components/layout/screenLayout";
import ListFood from "../layout/listFood";
import Sliders from "../layout/slider";
import classes from "./homeScreen.module.css";

import { getData } from "../firebase";

const HomeScreen = () => {
  const [danhMucMonAn, setDanhMucMonAn] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getData("DanhMucMonAn");
      setDanhMucMonAn(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <ScreenLayout>
        <Sliders />
        <div className={classes.content}>
          <h2>
            <span>danh mục món ăn</span>
          </h2>
          <ListFood data={danhMucMonAn} />
          <h2>
            <div className={classes.center}>
              <div className={classes.icon}></div>
              <span>có thể bạn sẽ thích món này</span>
            </div>
          </h2>
        </div>
      </ScreenLayout>
    </>
  );
};
export default HomeScreen;
