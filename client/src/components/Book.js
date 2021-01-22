import React from "react";

function Book(props) {
  return (
    <tbody>
      <tr>
      <td className="flex-container">{props.title}</td>
        <td className="flex-container">
          <img src={props.image} alt="book" />
        </td>
        
        <td className="flex-container">{props.authors}</td>
        <td className="flex-container">{props.description}</td>
        <td className="flex-container">{props.link}</td>
      </tr>
    </tbody>
  );
}

export default Book;
