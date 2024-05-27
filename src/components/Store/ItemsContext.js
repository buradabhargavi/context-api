import React from "react";
const ItemsContext = React.createContext({
  items: [],
  add: (item) => {},
  delete: (id) => {},
  edit: (id) => {},
});

export default ItemsContext;
