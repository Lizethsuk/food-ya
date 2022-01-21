import Landing from "./pages/Landing/";
import RegisterSelection from "./pages/RegisterSelection/";
import Footer from "./components/Footer/";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/";
import SignIn from "./pages/SignIn/";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register-selection" element={<RegisterSelection />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restaurant" element={<RestaurantPage />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
