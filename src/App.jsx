import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Global/Layout";
import AboutUs from "./Components/AboutUs/AboutUs";
import Product from "./Components/Products/Product";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/AboutUs"
        element={
          <Layout>
            <AboutUs />
          </Layout>
        }
      />

      <Route
        path="/Products"
        element={
          <Layout>
            <Product />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
