import React from "react";
import { Route, Routes } from "react-router-dom";
import Private from "../HOC/Private";
import Cart from "./Cart";
import Login from "./Login";
import Polo from "./Men/category/Polo";
import Men from "./Men/Men";
import JeansWear from "./women/catagory/JeansWear";
import TopsWear from "./women/catagory/TopsWear";
import Women from "./women/Women";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Women />} />
      <Route path="/topswear" element={<TopsWear />} />
      <Route path="/jeanswear" element={<JeansWear />} />

      <Route path="/men" element={<Men />} />
      <Route path="/polo" element={<Private> <Polo /></Private> } />

      <Route path="/cart" element={<Private><Cart /></Private> } />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
};

export default AllRoutes;
