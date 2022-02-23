/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  React, createContext, useState, useEffect,
} from 'react';

const MenuManageContext = createContext();

function MenuManageProvider(props) {
  const [menu, setMenu] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

  }, [menu]);

  const InitMenu = (elements) => {
    elements.forEach((item) => {
      if (!menu.hasOwnProperty(item)) { menu[item] = 0; }
    });
    console.log(menu);
    setIsLoading(false);
  };

  const AddToMenu = (name) => {
    if (menu.hasOwnProperty(name)) {
      menu[name] += 1;
    }
    console.log(menu);
    // else {
    //   menu[name] = 1;
    // }
  };

  const RemoveFromMenu = (name) => {
    if (menu.hasOwnProperty(name)) {
      if (menu[name] > 1) { menu[name] -= 1; }
      // else { delete menu[name]; }
    }
    console.log(menu);

    // else {
    //   console.log('NO EXISTS');
    // }
  };

  return (
    <MenuManageContext.Provider value={{
      menu, setMenu, AddToMenu, RemoveFromMenu, InitMenu, isLoading, setIsLoading,
    }}
    >
      {props.children}
    </MenuManageContext.Provider>
  );
}

export { MenuManageContext, MenuManageProvider };
