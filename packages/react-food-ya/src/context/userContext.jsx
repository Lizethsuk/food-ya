/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';

const UserContext = createContext(undefined);

function UserProvider(props) {
  const [user, setUser] = useState({ token: '', name: '' });

  const Initialize = () => {
    if (localStorage.getItem('token') !== null) {
      setUser({ ...user, token: localStorage.getItem('token'), name: localStorage.getItem('name') });
    } else {
      localStorage.setItem('token', '');
      localStorage.setItem('name', '');
      setUser(user);
    }
  };

  const ChangeTokenState = (tokenValue, nameValue) => {
    localStorage.setItem('token', tokenValue);
    localStorage.setItem('name', nameValue);
    setUser({ ...user, token: tokenValue, name: nameValue });
  };

  const ClearTokenState = () => {
    localStorage.setItem('token', '');
    localStorage.setItem('name', '');
    setUser({ token: '', name: '' });
  };

  return (
    <UserContext.Provider value={{
      user, setUser, Initialize, ChangeTokenState, ClearTokenState,
    }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
