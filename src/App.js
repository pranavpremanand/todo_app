import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const today = days[now.getDay()];
  // console.log(today);
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, happy {today} 🌝☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if (toDo === "") {
              alert("Enter something you wanna do...!");
            } else {
              setToDos([
                ...toDos,
                { id: Date.now(), status: false, text: toDo },
              ]);
              setToDo("");
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((val) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    // console.log(e.target.checked);
                    // console.log(val);
                    setToDos(
                      toDos.filter((obj) => {
                        if (obj.id === val.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    );
                  }}
                  value={val.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{val.text}</p>
                <h1>Active Task</h1>
              </div>
              <div onClick={()=>{
                setToDos(toDos.filter(obj=>{
                  if(obj.id !== val.id){
                    return obj
                  }
                }))
              }} className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
              {toDos.map((value) => {
          if (value.status) {
            return <h1 style={{ color: "white" }}>{value.text}</h1>;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default App;
