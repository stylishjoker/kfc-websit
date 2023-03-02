import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import DefaultLayout from "./components/layout";
import ObjectNavigates from "./router";
import Banner from "./components/banner";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {ObjectNavigates.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            if(route.id ===4){
              return(
                <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
              )
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Banner/>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
