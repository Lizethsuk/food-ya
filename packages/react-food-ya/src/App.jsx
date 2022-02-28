/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RegisterSelection from './pages/RegisterSelection';
import Footer from './components/Footer';
import CustomNavbar from './components/CustomNavbar';
import RegisterUser from './pages/RegisterUser';
import ConfirmationRegister from './pages/ConfirmationRegister';
import RegisterRestaurant from './pages/RegisterRestaurant';
import SignIn from './pages/SignIn';
import RestaurantPage from './pages/RestaurantPage';
import DishesManager from './pages/DishesManager';
import { ThemeContext } from './context/themeContext';
import { UserContext } from './context/userContext';

const mockUser = {
  token: false,
};
function App() {
  const { theme } = useContext(ThemeContext);
  const { Initialize, user } = useContext(UserContext);

  useEffect(() => {
    Initialize(mockUser);
  }, []);

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={!user.token ? <Landing /> : <p>Logged In</p>} />
          <Route path="/register-selection" element={<RegisterSelection />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/register-restaurant" element={<RegisterRestaurant />} />
          <Route path="/restaurant" element={<RestaurantPage />} />

          <Route path="/register-restaurant-one" element={<RegisterRestaurant />} />
          <Route path="/confirmation-register" element={<ConfirmationRegister />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dish-manager" element={<DishesManager />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
