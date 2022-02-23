/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
  React, createContext, useState,
} from 'react';

const MenuManageContext = createContext();

function MenuManageProvider(props) {
  // const [menu, setMenu] = useState({});
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const InitMenu = (elements) => {
    // const copy = { ...menu };
    const copy = [...menu];
    elements.forEach((item, index) => {
      // if (!copy.hasOwnProperty(item.name)) { copy[item.name] = 0; }
      copy.push({
        id: index, name: item.name, img: item.img, value: 0,
      });
    });
    setMenu(copy);
    setIsLoading(false);
  };

  const AddToMenu = (name) => {
    // const copy = { ...menu };
    // if (copy.hasOwnProperty(name)) {
    //   copy[name] += 1;
    // }
    const copy = [...menu];
    copy.forEach((item) => {
      if (item.name === name) { item.value += 1; }
    });

    setMenu(copy);
  };

  const RemoveFromMenu = (name) => {
    // const copy = { ...menu };
    // if (copy.hasOwnProperty(name)) {
    //   if (copy[name] > 0) { copy[name] -= 1; }
    // }
    const copy = [...menu];
    // copy.forEach((item) => (item.name === name && item.value > 0 ? item.value - 1 : item.value));
    copy.forEach((item) => {
      if (item.name === name && item.value > 0) { item.value -= 1; }
    });

    setMenu(copy);
    // console.log(menu);
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
