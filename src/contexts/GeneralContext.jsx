import React, { Children, createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: "Lemon", price: 29.99 },
    { id: 2, name: "Orange", price: 49.29 },
    { id: 3, name: "Banana", price: 19.24 },
    { id: 4, name: "Apple", price: 32.94 },
    { id: 5, name: "Blueberry", price: 50.99 },
  ]);
  const [records, setRecords] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const addRecords = (newRecord) => {
    const isExistedRecord = records.find(
      (record) => record.productId === newRecord.productId
    );
    if (isExistedRecord) {
      updateRecord(isExistedRecord.id, newRecord.quantity);
    } else {
      setRecords([...records, newRecord]);
    }
    console.log(isExistedRecord)
  };

  const removeRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const updateRecord = (id, addQty) => {
    setRecords(
      records.map((el) => {
        if (el.id === id) {
          const newQty = el.quantity + addQty;
          const newCost = el.price * newQty;
          return { ...el, quantity: newQty, cost: newCost };
        }
        return el;
      })
    );
  };
  return (
    <GeneralContext.Provider
      value={{
        openDrawer,
        toggleDrawer,
        products,
        addProduct,
        records,
        addRecords,
        removeRecord,
        updateRecord,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
