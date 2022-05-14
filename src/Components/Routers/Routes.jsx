import { Routes, Route } from "react-router";
import { Navbar } from "../Navbar";
import { Mens } from "../Mens";
import { Home } from "../Home";
import { Cart } from "../Cart";
import { EachProduct } from "../EachProduct";
import { Payment } from "../Payment";


export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mens" element={<Mens />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path = '/mens/:id' element = {<EachProduct />} />
        <Route exact path = '/payment' element = {<Payment />} />
      </Routes>
    </>
  );
};
