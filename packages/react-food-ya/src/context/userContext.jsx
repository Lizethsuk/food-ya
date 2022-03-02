/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';
// import useLocalStorage from '../customHooks/useLocalStorage';

const UserContext = createContext(undefined);

function UserProvider(props) {
  const [user, setUser] = useState(false);

  const Initialize = (mockUser) => {
    // useLocalStorage('token', mockUser);
    if (localStorage.getItem('token') !== null) {
      setUser(localStorage.getItem('token'));
    } else {
      localStorage.setItem('token', mockUser);
      setUser(mockUser);
    }
  };

  const ChangeTokenState = (value) => {
    localStorage.setItem('token', value);
    setUser(value);
  };

  return (
    <UserContext.Provider value={{
      user, setUser, Initialize, ChangeTokenState,
    }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
