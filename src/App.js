import React from "react";

import Category from "./Components/Admin/Category/Category";
import SubCategory from "./Components/Admin/Category/SubCategory";
import DisplayCategory from "./Components/Admin/Category/DisplayCategory";
import DisplaySubCategory from "./Components/Admin/Category/DisplaySubCategory";
import Company from "./Components/Admin/Category/Company";
import DisplayCompanys from "./Components/Admin/Category/DisplayCompanys";
import Model from "./Components/Admin/Category/Model";
import DisplayModel from "./Components/Admin/Category/DisplayModel";
import Dashboard from "./Components/Dashboard/Dashboard";
import Admin from "./Components/Admin/Category/Admin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./UI/Homepage/Homepage";
import ResultPage from "./Components/ResultPage";
import ProductPage from "./Components/ProductPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
         
           <Route element={<Category/>} path="/Category"/>
          <Route element={<SubCategory/>} path="/SubCategory"/>
          <Route element={<DisplayCategory/>} path="/DisplayCategory"/>
          <Route element={<DisplaySubCategory/>} path="/DisplaySubCategory"/>
          <Route element={<Company/>} path="/Company"/>
          <Route element={<DisplayCompanys/>} path="/DisplayCompany"/>
          <Route element={<Model/>} path="/Model"/>
          <Route element={<DisplayModel/>} path="/DisplayModel"/>
          <Route element={<Dashboard/>} path="/Dashboard"/>
          <Route element={<Admin/>} path="/Admin"/> 
          <Route element={<Dashboard/>} path="/Dashboard/*"/>
          <Route element={<Admin/>} path="/Admin"/>
          <Route element={<Homepage/>} path="/"/>
          <Route element={<ResultPage/>} path="/Result"/>
          <Route element={<ProductPage/>} path="/product"/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
