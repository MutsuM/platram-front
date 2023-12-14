import React, { Fragment } from "react";
import './Landing.css';
import { User } from 'react-feather';
import { Link } from 'react-router-dom';

const LandingView = () => {
    return <Fragment>
        <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-transparent">
            <div className="col-lg-10-5">
                <div className="collapse navbar-collapse top-10" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item line-navbar-li">
                            <a className="nav-link" href="#">ESPAÑOL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ENGLISH</a>
                        </li>
                        <li className="nav-item">
                            <Link to={'/signin'} className="btn btn-white"><User style={{marginTop: '-3px'}} /> Iniciar sesión</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="landing">
            <div className="landing-background"></div>
            <div className="col-lg-10 mx-auto">
                <div className="landing-content">
                    <div className="row">
                        <div className="col-lg-6" style={{ top: '3rem' }}>
                            <div className="col-lg-12">
                                <img src="img/landing-logo.png" alt="platram.png" className="landing-logo" />
                                <div>
                                    <h1 className="landing-title">Plataforma interoperable para la vigilancia integrada de Resistencia de los Antimicrobianos.</h1>

                                    <h1 className="landing-subtitle">
                                        Este desarrollo ha sido realizado dentro del Proyecto UNJP/PER/060/UNJ: “RAM-MPTF: Lucha contra la resistencia a los antimicrobianos en Perú bajo el enfoque de Una salud, financiado por el Fondo Fiduciario de Asociados Múltiples (MPTF).
                                    </h1>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-4" style={{marginTop: '20px'}}>
                                        <button className="btn btn-white">Descargar plantillas</button>
                                    </div>

                                    <div className="col-lg-4" style={{marginTop: '20px'}}>
                                        <button className="btn btn-white">Manual de usuario</button>
                                    </div>

                                    <div className="col-lg-4" style={{marginTop: '20px'}}>
                                        <button className="btn btn-white">Preguntas frecuentes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src="img/Landing-image.png" alt="" className="landing-image-content" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
};

export default LandingView;