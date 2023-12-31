import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", backgroundColor: "white" }}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <span className="one">Sama</span>
                    <span className="two" style={{ color: "#dc3545" }}>char</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Contact Us</a></li>
                                <li><a className="dropdown-item" href="/">Become a writer</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Subscribe</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>

    )
}


