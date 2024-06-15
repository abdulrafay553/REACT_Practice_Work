import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/action";

export default function About(props) {

  const updatedQty = useSelector((quantity) => quantity)
  const dispatch = useDispatch()

  return (
    <div>
      <h1 style={{ "font-family": "Brush Script MT", }} >ABOUT US - {props.name} - {props.author}{" "}</h1>
      <hr />
      <button className="btn btn-success">Quantity: {updatedQty}</button>
      <br /><br />
      <button className="btn btn-primary" onClick={() => dispatch(increment())}>Add: </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-danger" onClick={() => dispatch(decrement())}>Less: </button>
      <br /><br />
    </div>

  );
}
