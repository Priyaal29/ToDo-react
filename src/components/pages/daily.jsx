import React from "react";
import { useState, useEffect } from "react";
import "./daily.css";
import List from "./List";
import axios from "axios";

var t = new Date();
var today = t.getDate();
var mon = t.getMonth();
var year = t.getFullYear();

export default function Daily() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");


  

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

 
 



  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
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
      <div className="inputBox">
        <h3>
          List of {today}/{mon}/{year}
        </h3>
        <input
          type="text"
          className="inputField"
          value={inputText}
          onChange={handleChange}
          placeholder="Write your task here"
        />
        <button onClick={addItem}>Add</button>
      </div>

      {items.map(CreateList)}
    </div>
  );
}
