
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

import Categories from './components/Categories/Categories';
import VegetablesPage from './components/Categories/VegetablesPage/VegetablesPage';
import FreshFruitsPage from './components/Categories/FreshFruitsPage/FreshFruitsPage';
import Features from './components/Header/Navbar/Features';
import Blogs from './components/Header/Navbar/Blogs';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Header/Navbar/Login';
import Register from './components/Header/Navbar/Register';
import ForgotPassword from './components/Header/Navbar/ForgotPassword';
import Reviews from './components/Header/Navbar/Reviews';

import Beverages from './components/Categories/Beverages/BeveragesPage';
import BakeryCakes from './components/Categories/BakeryCakes/BakeryCakes';
import SnacksPage from './components/Categories/SnacksPage/SnacksPage';
import BeautyPage from './components/Categories/BeautyPage/BeautyPage';
import DairyProducts from './components/Categories/DairyProducts/DairyProducts';
import FoodProducts from './components/Categories/FoodProducts/FoodProducts';
import MeatProducts from './components/Categories/MeatProducts/MeatProducts';
import LunchBoxesPage from './components/Categories/LunchBoxesPage/LunchBoxesPage';
import BabyCarePage from './components/Categories/BabyCarePage/BabyCarePage';
import CleanersPage from './components/Categories/CleanersPage/CleanersPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Features />
            <Categories />
            <Blogs />
          </>
        } />
        <Route path="/vegetables" element={<VegetablesPage />} />
        <Route path="/fresh-fruits" element={<FreshFruitsPage />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/bakery" element={<BakeryCakes />} />
        <Route path="/snacks" element={<SnacksPage />} />
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/dairy" element={<DairyProducts />} />
        <Route path="/food" element={<FoodProducts />} />
        <Route path="/meat" element={<MeatProducts />} />
        <Route path="/lunch" element={<LunchBoxesPage />} />
        <Route path="/cleaners" element={<CleanersPage />} />
        <Route path="/babycare" element={<BabyCarePage />} />

         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/features" element={<Features />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/reviews" element={<Reviews />} />

      </Routes>
      <Footer />
    </div>
  </Router>
  );
}



export default App;
