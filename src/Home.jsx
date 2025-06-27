import poke from "/assets/pokeapi_256.png";
import eeve from './assets/eevee.jpg';
import { Container, Row, Col, Image } from "react-bootstrap";
import './Home.css'
; 

const Home = () => {
  return(
    <div className="Home">
      <h1> Home </h1>
      <img src={poke} />
    </div>
  )
}

export default Home;