import ScreenLayout from "../components/layout/screenLayout";
import Sliders from "../layout/slider";
import classes from "./homeScreen.module.css";

const HomeScreen = () => {
  return (
    <>
      <ScreenLayout>
        <Sliders />
      </ScreenLayout>
    </>
  );
};
export default HomeScreen;
