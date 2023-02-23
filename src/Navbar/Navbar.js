import "./Navbar.css";
import { Link } from "react-router-dom";


import React from 'react';
export default function Navbar() {
    return (
        <nav className="nav">
            <Link to= "/" className="site-title">
                Site Name
            </Link>

            <ul>
                
                <Link to= "/association">Association</Link>
                
                <Link to= "/voiture">Voiture</Link>
                
                <Link to= "/contact">Contact</Link>
                
            </ul>
        </nav>
    );
}



