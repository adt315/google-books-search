import React from "react";

function DeleteButton(props) {
  return (
    <div>
      <button type="submit" onClick={props.handleFormSubmit} className="contact">
        Delete
      </button>
    </div>
  );
}

export default DeleteButton;