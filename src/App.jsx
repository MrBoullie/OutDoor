import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Layout from "./Components/Global/Layout";
import AboutUs from "./Components/AboutUs/AboutUs";
import Product from "./Components/Products/Product";
import { useState } from "react";
import Swal from "sweetalert2";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (item) => {
    setCartCount(cartCount + 1); // Increment the cart count
    // Trigger SwalFire alert
    Swal.fire({
      title: "Success!",
      text: `${item.name} has been added to the cart.`,
      icon: "success",
      confirmButtonText: "OK",
      timer: 2000, // Auto-close after 2 seconds
    });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout cartCount={cartCount}>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/AboutUs"
        element={
          <Layout cartCount={cartCount}>
            <AboutUs />
          </Layout>
        }
      />

      <Route
        path="/Products"
        element={
          <Layout cartCount={cartCount}>
            <Product onAddToCart={handleAddToCart} />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
