import React, { useState } from "react";
// import Clock from "./Clock";

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
      <div className="container ">
        <div className="row">
          <div className="col-sm-6 mt-4 py-2 shadow p-3 mb-2 bg-white rounded-left " style={jumboclr}>
            <form onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
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
                <label htmlFor="desc">Description</label>
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
          <div className="col-sm-6 mt-4 py-2 shadow p-3 mb-2 bg-white   rounded-right ">{/* <Clock /> */}</div>
        </div>
      </div>
    </>
  );
}
