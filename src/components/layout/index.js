import Header from "../../layout/header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
