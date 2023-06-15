import "./App.css";
import {useState} from 'react'; 
import Buttons from "./components/buttons/Button";
import Title from "./components/title/Title";
function App() {
  const [contador, setContador] = useState(0); 
  const sumaContador = ()=> { setContador(contador + 1)}; 
  const restarContador = () => { if(contador > 0) setContador(contador - 1)}; 
  return (
    <>
      <Title texto= {contador} />
      <Buttons  funcion={sumaContador} texto= 'Sumar' variante='success'/>
      <Buttons  funcion={restarContador} texto= 'Restar' variante='danger'/>
    </>
  );
}

export default App;
