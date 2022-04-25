import React, { useState, useContext, useEffect } from 'react';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsFillLightbulbOffFill, BsLightbulbFill } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { ThemeContext } from '../../context/themeContext';
import './style.scss';
import { UserContext } from '../../context/userContext';
import { MenuManageContext } from '../../context/menuManageContext';

function CustomNavbar() {
  const [isInRestaurant, setIsInRestaurant] = useState(false);
  const { ClearTokenState, user, socket } = useContext(UserContext);
  const { theme, ToggleTheme } = useContext(ThemeContext);
  const { countProducts } = useContext(MenuManageContext);
  const navigate = useNavigate();
  const location = useLocation();
  const LogOut = () => {
    ClearTokenState();
    navigate('/');
  };

  const ShoppingCart = () => {
    navigate('/payment');
  };
  useEffect(() => {
    const restaurantRoute = '/dish-manager/';
    setIsInRestaurant(location.pathname.includes(restaurantRoute));
  }, [location]);

  useEffect(() => {
    socket?.on('tomarPedido', () => {
      NotificationManager.success('Pedido');
    });
  }, [socket]);

  useEffect(() => {
    if (localStorage.getItem('type') === 'owner') {
      socket?.emit('newRestaurant', localStorage.getItem('id'));
    }
  }, [socket]);

  return (
    <Navbar expand="md" className={theme}>
      <Container className="pe-0 ps-0">
        <NotificationContainer />
        <Navbar.Brand>
          <Link className="logo-link" to={!user.token ? '/' : '/home'}>
            <img
              src={
                theme === 'dark' ? '../../favicon.ico' : 'https://i.ibb.co/GH040rw/logo-color.png'
              }
              width="150"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content">
          {user.token && user.type !== 'owner' && (
            <Nav className={`ms-auto align-items-end login ${theme}`}>
              <Link to="/profile/orders" className="navUser">
                <img
                  src="https://media.istockphoto.com/vectors/female-photographer-holds-a-camera-and-takes-a-picture-tourist-and-vector-id1175499661"
                  alt="logo"
                  className="img-user"
                />
                <div>
                  <h4>{localStorage.getItem('name')}</h4>
                  <h5>Cliente</h5>
                </div>
              </Link>
              {isInRestaurant && (
                <button type="button" className="btn" onClick={() => ShoppingCart()}>
                  <FiShoppingCart /> <Badge bg="danger">{countProducts}</Badge>
                  <span className="visually-hidden">unread messages</span>
                </button>
              )}
              <button type="button" className="navSesion" onClick={() => LogOut()}>
                <p>Cerrar Sesión</p>
              </button>
              <button
                type="button"
                className={`buttonTheme ${theme}`}
                onClick={() => ToggleTheme()}>
                {theme === 'dark' ? <BsLightbulbFill /> : <BsFillLightbulbOffFill />}
              </button>
            </Nav>
          )}
          {user.token && user.type === 'owner' && (
            <Nav className={`ms-auto align-items-end login ${theme}`}>
              <Link to="/restaurant-profile/profile" className="navUser">
                <img
                  src="https://media.istockphoto.com/vectors/female-photographer-holds-a-camera-and-takes-a-picture-tourist-and-vector-id1175499661"
                  alt="logo"
                  className="img-user"
                />
                <div>
                  <h4>{localStorage.getItem('name')}</h4>
                  <h5>Dueño</h5>
                </div>
              </Link>
              <button type="button" className="navSesion" onClick={() => LogOut()}>
                <p>Cerrar Sesión</p>
              </button>
              <button
                type="button"
                className={`buttonTheme ${theme}`}
                onClick={() => ToggleTheme()}>
                {theme === 'dark' ? <BsLightbulbFill /> : <BsFillLightbulbOffFill />}
              </button>
            </Nav>
          )}
          {!user.token && (
            <Nav className="ms-auto align-items-end">
              <Link to="/sign-in-selection" className="ButtonHeader">
                Iniciar Sesión
              </Link>
              <Link to="/register-selection" className="ButtonHeader">
                Registrate
              </Link>
              <button
                type="button"
                className={`buttonTheme ${theme}`}
                onClick={() => ToggleTheme()}>
                {theme === 'dark' ? <BsLightbulbFill /> : <BsFillLightbulbOffFill />}
              </button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
