import React from "react";

function SearchButton(props) {
  return (
    <div>
      <button type="submit" onClick={props.handleFormSubmit} className="contact">
        Search
      </button>
    </div>
  );
}

export default SearchButton;