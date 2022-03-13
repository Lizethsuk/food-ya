/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import { React, createContext, useState } from 'react';

const MenuManageContext = createContext();

function MenuManageProvider(props) {
  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState([]);
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
      elements.forEach((item, index) => {
        copy.push({
          id: index,
          name: item.name,
          img: item.img,
          price: item.price,
          points: item.points,
          description: item.description,
          value: 0
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
      if (item.name === name) {
        item.value += 1;
      }
    });

    const selectedCopy = copy.filter((item) => item.value > 0);
    setSelectedMenu(selectedCopy);

    let countElementsInMenu = 0;
    copy.forEach((item) => {
      if (item.value > 0) {
        countElementsInMenu += 1;
      }
    });
    setCountProducts(countElementsInMenu);

    setMenu(copy);
  };

  const RemoveFromMenu = (name) => {
    const copy = [...menu];
    copy.forEach((item) => {
      if (item.name === name && item.value > 0) {
        item.value -= 1;
      }
    });

    const selectedCopy = copy.filter((item) => item.name === name && item.value > 0);
    setSelectedMenu(selectedCopy);

    let countElementsInMenu = 0;
    copy.forEach((item) => {
      if (item.value > 0) {
        countElementsInMenu += 1;
      }
    });
    setCountProducts(countElementsInMenu);

    setMenu(copy);
  };

  const GetTotal = () => {
    const selectedCopy = [...selectedMenu];
    let total = 0;
    selectedCopy.forEach((item) => {
      total += item.value * item.price;
    });
    return total;
  };

  const SaveData = () => {
    localStorage.setItem('products', JSON.stringify(selectedMenu));
  };

  const GetProducts = () => {
    let storageContent = [];
    if (localStorage.getItem('products') !== null) {
      storageContent = JSON.parse(localStorage.getItem('products'));
    } else {
      console.log('ERROR');
    }
    return storageContent;
  };

  return (
    <MenuManageContext.Provider
      value={{
        menu,
        setMenu,
        AddToMenu,
        RemoveFromMenu,
        InitMenu,
        isLoading,
        setIsLoading,
        selectedMenu,
        setSelectedMenu,
        countProducts,
        ClearMenu,
        GetTotal,
        SaveData,
        GetProducts
      }}>
      {props.children}
    </MenuManageContext.Provider>
  );
}

export { MenuManageContext, MenuManageProvider };
