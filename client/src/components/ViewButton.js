import React from "react";

function ViewButton(props) {
  return (
    <div>
      <button type="submit" onClick={props.handleFormSubmit} className="contact">
        View
      </button>
    </div>
  );
}

export default ViewButton;