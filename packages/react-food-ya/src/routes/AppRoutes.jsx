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
import AddDishes from '../pages/AddDishes';
import DishesManager from '../pages/DishesManager';
import NotFound from '../pages/NotFound';
import Invoice from '../pages/Invoice';
import PaymentGateway from '../pages/PaymentGateway';
import { UserContext } from '../context/userContext';
import ProfileSettings from '../pages/ProfileSettings';
import SingleOrder from '../pages/ProfileSettings/Orders/SingleOrder';
import RestaurantSettingsProfile from '../pages/RestaurantProfileSettings';
import OrderDetails from '../pages/RestaurantProfileSettings/MyRestaurantOrders/OrderDetails';

function AppRoutes() {
  const { user } = useContext(UserContext);
  const condition = user.token !== '';
  const isClient = user.type === 'client';

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
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
        <Route path="/add-dish" element={!isClient ? <AddDishes /> : <Navigate to="/home" />} />
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
        <Route
          path="/home"
          element={condition ? <Home isClient={isClient} /> : <Navigate to="/" />}
        />
        <Route
          path="/confirmation/:token"
          element={isClient ? <Confirmation /> : <Navigate to="/home" />}
        />
        <Route
          path="/dish-manager/:restaurantId"
          element={isClient ? <DishesManager /> : <Navigate to="/home" />}
        />
        <Route path="/payment" element={isClient ? <PaymentGateway /> : <Navigate to="/home" />} />
        <Route path="/payment-message" element={isClient ? <Invoice /> : <Navigate to="/home" />} />
        <Route
          path="/profile/*"
          element={isClient ? <ProfileSettings /> : <Navigate to="/home" />}
        />
        <Route path="/profile/orders/:id" element={<SingleOrder />} />

        <Route path="/restaurant-profile/*" element={<RestaurantSettingsProfile />} />
        <Route path="/restaurant-profile/order/:id" element={<OrderDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
