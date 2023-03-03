import ScreenLayout from "../components/layout/screenLayout";
import ListFood from "../layout/listFood";
import Sliders from "../layout/slider";
import classes from "./homeScreen.module.css";

const HomeScreen = () => {
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
