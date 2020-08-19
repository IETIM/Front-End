import React from 'react';
import {Link} from 'react-router-dom';
import './Main.css';

export default function Main(){
    return(
        <div id="index">
            <div>
                <div>Logo</div>
                <div>
                    <Link to="/login">Inciar sesion</Link>
                    <div></div>
                    <Link to="/signup">Registro</Link>
                </div>
            </div>
        </div>
    )
}