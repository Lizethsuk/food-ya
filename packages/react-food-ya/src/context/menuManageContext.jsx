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
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countProducts, setCountProducts] = useState(0);
  const [id, setId] = useState(-1);

  const ClearMenu = () => {
    setMenu([]);
    setId(-1);
    setCountProducts(0);
  };

  const InitMenu = (elements, currId) => {
    setIsLoading(true);
    if (currId !== id) {
      const copy = [...menu];
      elements.forEach((item) => {
        copy.push({
          id: item.id,
          name: item.dishName,
          img: item.image,
          price: `S/ ${item.price}`,
          points: item.points,
          description: item.description,
          value: 0,
        });
      });
      setCountProducts(0);
      setMenu(copy);
      setId(currId);
    }
    setIsLoading(false);
  };

  const AddToMenu = (name) => {
    const copy = [...menu];
    copy.forEach((item) => {
      if (item.name === name) { item.value += 1; }
    });

    let countElementsInMenu = 0;
    copy.forEach((item) => {
      if (item.value > 0) { countElementsInMenu += 1; }
    });
    setCountProducts(countElementsInMenu);

    setMenu(copy);
  };

  const RemoveFromMenu = (name) => {
    const copy = [...menu];
    copy.forEach((item) => {
      if (item.name === name && item.value > 0) { item.value -= 1; }
    });

    let countElementsInMenu = 0;
    copy.forEach((item) => {
      if (item.value > 0) { countElementsInMenu += 1; }
    });
    setCountProducts(countElementsInMenu);

    setMenu(copy);
  };

  return (
    <MenuManageContext.Provider value={{
      menu,
      setMenu,
      AddToMenu,
      RemoveFromMenu,
      InitMenu,
      isLoading,
      setIsLoading,
      countProducts,
      ClearMenu,
    }}
    >
      {props.children}
    </MenuManageContext.Provider>
  );
}

export { MenuManageContext, MenuManageProvider };
