import React, { useContext } from "react";
import Button from "../layouts/Button";
import ItemsContext from "../Store/ItemsContext";

function Item({ item }) {
  const { deleteItem, editItem } = useContext(ItemsContext);

  const handleDelete = () => {
    deleteItem(item._id);
  };

  const handleEdit = () => {
    const newUrl = prompt("Enter new URL:", item.url);
    if (newUrl) {
      editItem(item._id, { url: newUrl });
    }
  };

  return (
    <div>
      <li>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          {item.url}
        </a>
      </li>
      <Button onClick={handleDelete}>Delete</Button>
      <Button onClick={handleEdit}>Edit</Button>
    </div>
  );
}

export default Item;
