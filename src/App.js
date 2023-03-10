import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { Provider } from "react-redux";

import DefaultLayout from "./components/layout";
import ObjectNavigates from "./router";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
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
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
