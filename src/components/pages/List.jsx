import React from "react";
import "./list.css";
import DeleteIcon from '@mui/icons-material/Delete';


export default function List(props) {
  return (
    <div className="ListBox"
   
    >
      

      <ul className="list">
        <li className="listItems">{props.name}
          <span 
           onClick={() => {
            props.onChecked(props.id);
          }}
          >
            <DeleteIcon className="deleteButton" />
          </span>
        </li>
      </ul>
    </div>
  );
}
