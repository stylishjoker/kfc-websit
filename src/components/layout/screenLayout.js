import Banner from "../banner";

const ScreenLayout = ({ children }) => {
  return (
    <div style={{ paddingTop: "110px", minHeight: "1000px" }}>
      <Banner />
      <div>{children}</div>
    </div>
  );
};
export default ScreenLayout;
