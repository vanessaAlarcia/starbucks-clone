import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Menu from './components/MenuLink/Menu';
import Rewards from './components/RewardsLink/Rewards';
import GiftCards from './components/GiftCardsLink/GiftCards';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="menu" element={<Menu />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="giftcards" element={<GiftCards />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
