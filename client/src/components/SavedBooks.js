import React from "react";
import ViewButton from "../components/ViewButton";
import DeleteButton from "../components/DeleteButton";

function SavedBooks() {
  return (
    <div>
      <h3>Saved Books:</h3>
      <ViewButton />
      <DeleteButton />
    </div>
  );
}

export default SavedBooks;