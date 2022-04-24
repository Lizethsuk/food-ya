import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import RegisterSelection from '../pages/RegisterSelection';
import SignInSelection from '../pages/SignInSelection';
import Footer from '../components/Footer';
import Confirmation from '../components/Confirmation';
import CustomNavbar from '../components/CustomNavbar';
import RegisterUser from '../pages/RegisterUser';
import ConfirmationRegister from '../pages/ConfirmationRegister';
import RegisterRestaurant from '../pages/RegisterRestaurant';
import SignInUser from '../pages/SignInUser';
import SignInRestaurant from '../pages/SignInRestaurant';
import RestaurantPage from '../pages/RestaurantPage';
import UpdateRestaurant from '../pages/UpdateRestaurant';
import DishesManager from '../pages/DishesManager';
import NotFound from '../pages/NotFound';
import Invoice from '../pages/Invoice';
import PaymentGateway from '../pages/PaymentGateway';
import { UserContext } from '../context/userContext';
import ProfileSettings from '../pages/ProfileSettings';
import SingleOrder from '../pages/ProfileSettings/Orders/SingleOrder';

function AppRoutes() {
  const { user } = useContext(UserContext);
  const condition = user.token !== '';
  const isUser = user.type === 'user';

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/register-selection"
          element={condition ? <Navigate to="/home" /> : <RegisterSelection />}
        />
        <Route
          path="/register-user"
          element={condition ? <Navigate to="/home" /> : <RegisterUser />}
        />
        <Route
          path="/register-restaurant"
          element={condition ? <Navigate to="/home" /> : <RegisterRestaurant />}
        />
        <Route
          path="/register-user"
          element={condition ? <Navigate to="/home" /> : <RegisterUser />}
        />
        <Route
          path="/register-restaurant"
          element={condition ? <Navigate to="/home" /> : <RegisterRestaurant />}
        />
        <Route path="/update-restaurant" element={<UpdateRestaurant />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route
          path="/confirmation-register"
          element={condition ? <Navigate to="/home" /> : <ConfirmationRegister />}
        />
        <Route
          path="/sign-in-selection"
          element={condition ? <Navigate to="/home" /> : <SignInSelection />}
        />
        <Route
          path="/sign-in-user"
          element={condition ? <Navigate to="/home" /> : <SignInUser />}
        />
        <Route
          path="/sign-in-restaurant"
          element={condition ? <Navigate to="/home" /> : <SignInRestaurant />}
        />
        <Route path="/" element={condition ? <Navigate to="/home" /> : <Landing />} />
        <Route path="/home" element={condition ? <Home isUser={isUser} /> : <Navigate to="/" />} />
        <Route path="/confirmation/:token" element={<Confirmation />} />
        <Route path="/dish-manager/:restaurantId" element={<DishesManager />} />
        <Route path="/payment" element={<PaymentGateway />} />
        <Route path="/payment-message" element={<Invoice />} />
        <Route path="/profile/*" element={<ProfileSettings />} />
        <Route path="/profile/orders/:id" element={<SingleOrder />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
