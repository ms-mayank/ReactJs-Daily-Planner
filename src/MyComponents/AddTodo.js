import React, { useState } from "react";

export default function AddTodo({ addTodos }) {
  let jumboclr = {
    backgroundColor: "#e9ecef",
  };
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    let tdate = String(new Date()).substring(0, 24);
    e.preventDefault();
    if (title == "" || desc == "") {
      alert("Title and Description can not be blank");
    } else {
      addTodos(tdate, title, desc);
      setDesc("");
      setTitle("");
    }
  };
  return (
    <>
      <div className="col m-2 shadow  bg-white rounded" style={jumboclr}>
        <form onSubmit={submit}>
          <div className="form-group">
            <h6 className="mt-2 m-0">
              <label htmlFor="title">Title</label>
            </h6>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              id="title"
              aria-describedby="emailHelp"
              placeholder="Enter Tilte"
            />
          </div>
          <div className="form-group">
            <h6 className="mt-2 m-0">
              <label htmlFor="desc">Description</label>
            </h6>
            <input
              type="text"
              className="form-control"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              id="desc"
              placeholder="Description"
            />
          </div>
          <button className="btn btn-sm btn-success">Submit</button>
        </form>
      </div>
    </>
  );
}
