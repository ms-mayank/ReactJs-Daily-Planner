import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import Clock from "./MyComponents/Clock";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
function App() {
  let mainBody = {
    backgroundColor: "#ddd",
  };
  let initTodo;
  if (localStorage.getItem("todoitems") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todoitems"));
  }
  function onDelete(item) {
    setTodoItems(
      todoitems.filter((e) => {
        return e !== item;
      })
    );
    // localStorage.setItem("todoitems", JSON.stringify(todoitems));
  }
  const [todoitems, setTodoItems] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todoitems", JSON.stringify(todoitems));
  }, [todoitems]);

  const addTodos = (tdate, title, desc) => {
    let myTodo = {
      tDate: tdate,
      Title: title,
      Desc: desc,
    };
    setTodoItems([...todoitems, myTodo]);
  };

  return (
    <div style={mainBody}>
      <Router>
        <Header Title="EveryDay" Search={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container">
                  <div className="row">
                    <AddTodo addTodos={addTodos} />
                    <Clock />
                  </div>
                </div>
                <hr />
                <Todos todoitems={todoitems} onDelete={onDelete} />
              </>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
