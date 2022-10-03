import React from "react";
export default function Todoitem({ item, onDelete }) {
  let cardStyle = {
    maxWidth: "auto",
  };
  return (
    <div className="card text-bg-success mb-3" style={cardStyle}>
      <div className="card-header m-0 p-0 px-2 font-italic text-right">{item.tDate}</div>
      <div className="card-body">
        <h5 className="card-title">{item.Title}</h5>
        <p className="card-text">{item.Desc}</p>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete(item);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
