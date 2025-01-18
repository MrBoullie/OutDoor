import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Global/Layout";
import AboutUs from "./Components/AboutUs/AboutUs";

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
    </Routes>
  );
}

export default App;
