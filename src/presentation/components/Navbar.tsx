import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-platram">
            <a className="navbar-brand" href="/home">
                <div className="desktop">
                    <img src="img/platram.png" alt="platram" />
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">PCR-Julian Ochoa</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;