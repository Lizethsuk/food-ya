/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';

const UserContext = createContext(undefined);

function UserProvider(props) {
  const [user, setUser] = useState({ token: '', name: '' });

  const Initialize = () => {
    if (localStorage.getItem('token') !== null) {
      setUser({
        ...user,
        token: localStorage.getItem('token'),
        name: localStorage.getItem('name'),
        type: localStorage.getItem('type')
      });
    } else {
      localStorage.setItem('token', '');
      localStorage.setItem('name', '');
      localStorage.setItem('type', '');
      setUser(user);
    }
  };

  const ChangeTokenState = (tokenValue, nameValue, typeValue) => {
    localStorage.setItem('token', tokenValue);
    localStorage.setItem('name', nameValue);
    localStorage.setItem('type', typeValue);
    setUser({ ...user, token: tokenValue, name: nameValue, type: typeValue });
  };

  const ClearTokenState = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('name', '');
    localStorage.setItem('type', '');
    setUser({ token: '', name: '', type: '' });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        Initialize,
        ChangeTokenState,
        ClearTokenState
      }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
