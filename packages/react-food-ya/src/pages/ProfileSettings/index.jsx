/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ButtonGroup, ToggleButton } from 'react-bootstrap/';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Directions from './Directions';
import Orders from './Orders';
import MyLists from './MyLists';
import PaymentMethods from './PaymentMethods';
import { ProfileButtonOptions } from './style';

function ProfileSettings() {
  const [radioValue, setRadioValue] = useState('1');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const options = [
    { name: 'Mis órdenes', value: '1' },
    { name: 'Mis direcciones', value: '2' },
    { name: 'Mis medios de pago', value: '3' },
    { name: 'Mis listas', value: '4' }
  ];

  useEffect(() => {
    setIsLoading(true);
    switch (location.pathname) {
      case '/profile/directions':
        setRadioValue('2');
        break;
      case '/profile/payments':
        setRadioValue('3');
        break;
      case '/profile/lists':
        setRadioValue('4');
        break;
      case '/profile/orders':
      default:
        setRadioValue('1');
        break;
    }
    setIsLoading(false);
  }, []);

  const Redirect = (e) => {
    const { value } = e.currentTarget;
    setRadioValue(value);

    const tempLocation = '/profile';

    switch (value) {
      case '2':
        navigate(`${tempLocation}/directions`);
        break;
      case '3':
        navigate(`${tempLocation}/payments`);
        break;
      case '4':
        navigate(`${tempLocation}/lists`);
        break;
      case '1':
      default:
        navigate(`${tempLocation}/orders`);
        break;
    }
  };

  return (
    <div className="landing-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <ProfileButtonOptions>
          <ButtonGroup>
            {isLoading && <p>Is Loading..</p>}
            {!isLoading &&
              options.map((radio, index) => (
                <ToggleButton
                  key={index}
                  id={`radio-${index}`}
                  type="radio"
                  name="radio"
                  className={`btn-option 
                      ${(index + 1).toString() === radioValue ? 'selected' : ''}`}
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => Redirect(e)}>
                  {radio.name}
                </ToggleButton>
              ))}
          </ButtonGroup>
        </ProfileButtonOptions>

        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/payments" element={<PaymentMethods />} />
          <Route path="/lists" element={<MyLists />} />
        </Routes>
      </motion.div>
    </div>
  );
}

export default ProfileSettings;
