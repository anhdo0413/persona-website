import './Navbar.css';
import '../App.js'
import logo from '../assets/icon.png';
//import { useLocation } from 'react-router-dom';
import { useEffect, useState} from "react";

export default function Navbar() {
    const location = 'hi';
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
      }, [location]);

    return (
    <nav className="nav">
        <a href="#home" className="site-title">
            <img className="logo" src={logo} alt="Enya Do"/>
        </a>
        <ul>
            <li className={"underline" + (url === "/" ? "active" : "")}><a id="sec-1" href="#about">About</a></li>
            <li><a id="sec-2" href="#experience">Experience</a></li>
            <li><a id="sec-3" href="#projects">Projects</a></li>
            <li><a id="sec-4" href="#contact">Contact</a></li>
        </ul>
    </nav>
    )
}
