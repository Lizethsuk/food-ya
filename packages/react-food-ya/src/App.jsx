/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import RegisterSelection from './pages/RegisterSelection';
import Footer from './components/Footer';
import CustomNavbar from './components/Navbar';
import RegisterUser from './pages/RegisterUser';
import ConfirmationRegister from './pages/ConfirmationRegister';
import RegisterRestaurant from './pages/RegisterRestaurant';
import SignIn from './pages/SignIn';
import RestaurantPage from './pages/RestaurantPage';
import { ThemeContext } from './context/themeContext';

/*
export const ThemeContext = createContext(undefined); */

function App() {
  const { theme } = useContext(ThemeContext);
  /* const [mode, setMode] = useState('modo oscuro'); */
  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        {/* <ModeContext value={{ theme, setTheme }}> */}
        <CustomNavbar />
        {/*  </ModeContext> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register-selection" element={<RegisterSelection />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/register-restaurant" element={<RegisterRestaurant />} />
          <Route path="/restaurant" element={<RestaurantPage />} />

          <Route path="/register-restaurant-one" element={<RegisterRestaurant />} />
          <Route path="/confirmation-register" element={<ConfirmationRegister />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
