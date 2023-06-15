import React, {useState} from "react";
import './button.css'; 
import { Button } from "react-bootstrap";
const Buttons  = (props) => {
    return (
      <Button className="btnTest"
      variant={props.variante}
      onClick={props.funcion}
      >{props.texto}</Button>
    );
  }; 

  export default Buttons; 