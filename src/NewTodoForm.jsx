import { useState } from "react";
import PropTypes from "prop-types";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={submitHandler} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add Item</button>
      </form>
    </>
  );
};

NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewTodoForm;
