import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

export default function Header() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Gestion des employée</a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a className="nav-link " href="/">
                                <Link to="/">Acceuil</Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link " href="/addemployee">
                            <Link to="/addemployee">Ajouter un nouveau employée</Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
