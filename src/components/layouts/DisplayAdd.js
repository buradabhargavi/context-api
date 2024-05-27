import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import Button from "./Button";
import ItemsContext from "../Store/ItemsContext";

function DisplayAdd(props) {
  const [url, setUrl] = useState("");

  const ctx = useContext(ItemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() !== "") {
      ctx.add({ url: url });
      setUrl("");
      props.show();
    }
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <Modal>
      <form onSubmit={handleSubmit}>
        <input type="url" name="url" value={url} onChange={handleUrlChange} />
        <Button type="submit">Submit</Button>
        <Button onClick={props.show}>Close</Button>
      </form>
    </Modal>
  );
}

export default DisplayAdd;
