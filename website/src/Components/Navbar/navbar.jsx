import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../../Assets/ride2gether.png"
import "../Navbar/navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    const urls = [
        '/inicio',
        '/sobre',
        '/equipa',
        '/contactos',
    ];

    return (
        <div className="navbarContainer">
            <img className="imgStyle" src={img} onClick={ () => navigate(urls[0])}/>
            <div className="buttonsContainer">
                <button className="buttonStyle" onClick={ () => navigate(urls[0]) }>Início</button>
                <button className="buttonStyle" onClick={() => navigate(urls[1]) }>Sobre</button>
                <button className="buttonStyle" onClick={ () => navigate(urls[2]) }>Equipa</button>
                <button className="buttonStyle" onClick={ () => navigate(urls[3]) }>Contactos</button>
            </div>
        </div>
    )


}
export default Navbar