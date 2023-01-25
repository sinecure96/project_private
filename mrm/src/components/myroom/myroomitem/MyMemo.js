import React from "react";
import './MyMemo.css'
import { BiPencil } from 'react-icons/bi'



export default function MyMemo() {


  return (
    <div className="MemoContainer">
      <div className="EditIcon"><BiPencil/></div>
      
      <h3>MY MEMO</h3>
      <hr></hr>
      <p>mememeomeoemoemoemo</p>

    </div>
  )
}