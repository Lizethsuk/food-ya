/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext } from 'react';

const UserContext = createContext(undefined);

function UserProvider(props) {
  const [user, setUser] = useState({});

  const Initialize = (mockUser) => {
    setUser(mockUser);
  };

  const ChangeTokenState = (value) => {
    const mockUser = { ...user, token: value };
    setUser(mockUser);
    // alert(mockUser.token);
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
