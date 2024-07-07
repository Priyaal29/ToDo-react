import React from "react";
import "./task.css";
import { useState,useEffect } from "react";
import List from "./List";
// import Items from "./taskItems"

export default function Task() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(()=>{
    fetch("/api/TaskItems")
    .then((res)=>res.json())
    .then((data)=>setItems(data));

  },[]);


  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(prevItems) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function CreateList(todoItem, index) {
    return (
      <div>
        <List key={index} id={index} name={todoItem} onChecked={deleteItem} />
      </div>
    );
  }

  return (
    <div className="Daily">
      <div className="Box">
        <input
          type="text"
          className="inputField"
          id="Field"
          value={inputText}
          onChange={handleChange}
          placeholder="Write your task here"
        />
        <button onClick={addItem} id="myBtn">
          Add
        </button>
      </div>

      {items.map(CreateList)}
    </div>
  );
}
