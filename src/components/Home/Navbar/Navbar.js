import React from 'react';
import {Link} from 'react-router-dom';
import navLogo from '../../../img/navLogo.png';
import style from './Navbar.module.css';

export default function Navbar() {
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={navLogo} className="w-75 h-75" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link active" id={style.navitem}  aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" id={style.navItem} aria-current="page" to="/registration">Registration</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" id={style.navItem} aria-current="page" to="/">Card</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" id={style.navItem} aria-current="page" to="/certificate">Certificate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" id={style.navItem} aria-current="page" to="/">Verify Certificate</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" id={style.navItem} aria-current="page" to="/lang">
                                    <button id={style.btn}>বাংলা</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    )
}
