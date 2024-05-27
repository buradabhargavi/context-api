import React, { useState } from "react";
import ItemsContext from "./ItemsContext";

function ItemProvider(props) {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now(),
      dateAdded: new Date().toISOString(),
    };
    setItems((prevItems) => [...prevItems, newItem]);
    console.log("add item", newItem);
  };

  const editItem = (itemId, newItem) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, ...newItem } : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  const itemContext = {
    items: items,
    add: addItem,
    edit: editItem,
    delete: deleteItem,
  };

  return (
    <ItemsContext.Provider value={itemContext}>
      {props.children}
    </ItemsContext.Provider>
  );
}

export default ItemProvider;
