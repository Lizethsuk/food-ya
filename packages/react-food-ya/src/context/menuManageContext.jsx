/* eslint-disable no-param-reassign */
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

  const saveData = () => {
    localStorage.setItem('products', JSON.stringify(selectedMenu));
  };

  const getProducts = () => {
    let storageContent = [];
    if (localStorage.getItem('products') !== null) {
      storageContent = JSON.parse(localStorage.getItem('products'));
    }
    return storageContent;
  };

  const clearMenu = () => {
    setMenu([]);
    setId(-1);
    setCountProducts(0);
  };

  const initMenu = (elements, currId) => {
    setIsLoading(true);
    if (currId !== id) {
      const copy = [...menu];
      elements.forEach((item) => {
        copy.push({
          id: item.id,
          name: item.dishName,
          img: item.image,
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

  const addToMenu = (name) => {
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

  const removeFromMenu = (name) => {
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

  const removeFromOrder = (_id) => {
    let storageContent = [];
    if (localStorage.getItem('products') !== null) {
      storageContent = JSON.parse(localStorage.getItem('products'));
    }

    const selectedCopy = storageContent.filter((item) => item.id !== _id);
    setSelectedMenu(selectedCopy);
    localStorage.setItem('products', JSON.stringify(selectedCopy));
  };

  const clearOrder = () => {
    setSelectedMenu([]);
    localStorage.setItem('products', JSON.stringify([]));
  };

  const getTotal = () => {
    const selectedCopy = [...selectedMenu];
    let total = 0;
    selectedCopy.forEach((item) => {
      total += item.value * item.price;
    });
    return total;
  };

  const setDeliveryPriceToTotal = (price) => {
    const selectedCopy = [...selectedMenu];
    let total = 0;
    selectedCopy.forEach((item) => {
      total += item.value * item.price;
    });
    total += price;
    return total;
  };

  return (
    <MenuManageContext.Provider
      value={{
        menu,
        setMenu,
        AddToMenu: addToMenu,
        RemoveFromMenu: removeFromMenu,
        InitMenu: initMenu,
        isLoading,
        setIsLoading,
        selectedMenu,
        setSelectedMenu,
        countProducts,
        ClearMenu: clearMenu,
        GetTotal: getTotal,
        SaveData: saveData,
        GetProducts: getProducts,
        SetDeliveryPriceToTotal: setDeliveryPriceToTotal,
        RemoveFromOrder: removeFromOrder,
        clearOrder
      }}>
      {props.children}
    </MenuManageContext.Provider>
  );
}

export { MenuManageContext, MenuManageProvider };
