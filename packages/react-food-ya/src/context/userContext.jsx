/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';

const UserContext = createContext(undefined);

function UserProvider(props) {
  const [user, setUser] = useState(false);

  const Initialize = () => {
    if (localStorage.getItem('token') !== null) {
      setUser(localStorage.getItem('token'));
    } else {
      localStorage.setItem('token', '');
      setUser('');
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
