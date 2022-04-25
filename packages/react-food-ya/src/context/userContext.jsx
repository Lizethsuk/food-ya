/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import CONFIG from '../utils/host';

const UserContext = createContext(undefined);

function UserProvider(props) {
  const [user, setUser] = useState({ token: '', name: '' });
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('type') === 'owner') {
      setSocket(io(CONFIG.url));
    }
    return socket?.disconnect(true);
  }, []);

  const Initialize = () => {
    if (localStorage.getItem('token') !== null) {
      setUser({
        ...user,
        token: localStorage.getItem('token'),
        name: localStorage.getItem('name'),
        type: localStorage.getItem('type'),
        id: localStorage.getItem('id')
      });
      if (localStorage.getItem('type') === 'owner') {
        socket?.emit('newRestaurant', localStorage.getItem('id'));
      }
    } else {
      localStorage.setItem('token', '');
      localStorage.setItem('name', '');
      localStorage.setItem('type', '');
      localStorage.setItem('id', '');
      setUser(user);
    }
  };

  const ChangeTokenState = (tokenValue, nameValue, typeValue, idValue) => {
    localStorage.setItem('token', tokenValue);
    localStorage.setItem('name', nameValue);
    localStorage.setItem('type', typeValue);
    localStorage.setItem('id', idValue);
    setUser({ ...user, token: tokenValue, name: nameValue, type: typeValue, id: idValue });
    if (typeValue === 'owner') {
      setSocket(io(CONFIG.url));
    }
  };

  const ClearTokenState = () => {
    if (localStorage.getItem('type') === 'owner') {
      socket?.emit('salir');
    }
    localStorage.setItem('token', '');
    localStorage.setItem('name', '');
    localStorage.setItem('type', '');
    localStorage.setItem('id', '');
    setUser({ token: '', name: '', type: '', id: '' });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        Initialize,
        ChangeTokenState,
        ClearTokenState,
        socket,
        setSocket
      }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
