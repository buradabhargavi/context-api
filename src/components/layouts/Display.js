import React, { useContext, useState } from "react";
import Button from "./Button";
import DisplayAdd from "./DisplayAdd";
import ListItems from "../Func/ListItems";
import ItemsContext from "../Store/ItemsContext";

function Display() {
  const [show, setShow] = useState(false);
  const { items } = useContext(ItemsContext); // Accessing items from context

  const addShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <React.Fragment>
      <h1>BookMark Website</h1>
      {show && <DisplayAdd show={addShow} />}
      <Button onClick={addShow}>Add Item</Button>
      <ListItems items={items} />
    </React.Fragment>
  );
}

export default Display;
