/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import RegisterSelection from './pages/RegisterSelection';
import SignInSelection from './pages/SignInSelection';
import Footer from './components/Footer';
import CustomNavbar from './components/CustomNavbar';
import RegisterUser from './pages/RegisterUser';
import ConfirmationRegister from './pages/ConfirmationRegister';
import RegisterRestaurant from './pages/RegisterRestaurant';
import SignInUser from './pages/SignInUser';
import SignInRestaurant from './pages/SignInRestaurant';
import RestaurantPage from './pages/RestaurantPage';
import DishesManager from './pages/DishesManager';
import { ThemeContext } from './context/themeContext';
import { UserContext } from './context/userContext';

const mockUser = false;
function App() {
  const { theme } = useContext(ThemeContext);
  const { Initialize } = useContext(UserContext);

  useEffect(() => {
    Initialize(mockUser);
  }, []);

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register-selection" element={<RegisterSelection />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/register-restaurant" element={<RegisterRestaurant />} />
          <Route path="/restaurant" element={<RestaurantPage />} />

          <Route path="/register-restaurant-one" element={<RegisterRestaurant />} />
          <Route path="/confirmation-register" element={<ConfirmationRegister />} />
          <Route path="/sign-in-selection" element={<SignInSelection />} />
          <Route path="/sign-in-user" element={<SignInUser />} />
          <Route path="/sign-in-restaurant" element={<SignInRestaurant />} />
          <Route path="/home" element={<Home />} />

          <Route path="/dish-manager" element={<DishesManager />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
