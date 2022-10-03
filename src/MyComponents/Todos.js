import React from "react";
import Todoitem from "./Todoitem";

export default function Todos(props) {
  return (
    <div>
      <div className="container bg-white rounded py-4">
        {props.todoitems.length !== 0
          ? props.todoitems.map((item) => {
              return <Todoitem key={item.tDate} item={item} onDelete={props.onDelete} />;
            })
          : "Nothing To show"}
      </div>
    </div>
  );
}
