import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemsContext from "./ItemsContext";

const API_URL =
  "https://crudcrud.com/api/7ceaa46aa79147fc817eb74862f608e0/bookMarks";

function ItemProvider(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const addItem = (item) => {
    const newItem = {
      ...item,
      dateAdded: new Date().toISOString(),
    };

    axios
      .post(API_URL, newItem)
      .then((response) => {
        setItems((prevItems) => [...prevItems, response.data]);
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  const editItem = (itemId, newItem) => {
    const updatedItem = {
      ...newItem,
      dateAdded: new Date().toISOString(),
    };

    axios
      .put(`${API_URL}/${itemId}`, updatedItem)
      .then(() => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item._id === itemId ? { ...item, ...updatedItem } : item
          )
        );
      })
      .catch((error) => {
        console.error("Error editing item:", error);
      });
  };

  const deleteItem = (itemId) => {
    axios
      .delete(`${API_URL}/${itemId}`)
      .then(() => {
        setItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  return (
    <ItemsContext.Provider value={{ items, addItem, editItem, deleteItem }}>
      {props.children}
    </ItemsContext.Provider>
  );
}

export default ItemProvider;
