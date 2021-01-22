import React from "react";

function SaveButton(props) {
  return (
    <div>
      <button type="submit" onClick={props.handleFormSubmit} className="contact">
        Save
      </button>
    </div>
  );
}

export default SaveButton;