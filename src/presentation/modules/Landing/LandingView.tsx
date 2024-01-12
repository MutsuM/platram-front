import React, { Fragment } from "react";
import './Landing.css';
import { User,HelpCircle, FileText, File } from 'react-feather';
import { Link } from 'react-router-dom';

const LandingView = () => {
    return <Fragment>
        <div className="web">
            <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-transparent">
                <div className="col-lg-10-5">
                    <div className="collapse navbar-collapse top-10" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item line-navbar-li">
                                <span className="nav-link">ESPAÑOL</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">ENGLISH</span>
                            </li>
                            <li className="nav-item">
                                <Link to={'/signin'} className="btn btn-white"><User style={{ marginTop: '-3px' }} /> Iniciar sesión</Link>
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
                            <div className="col-lg-6">
                                <div className="col-lg-12">
                                    <img src="img/logo-platram.svg" alt="platram.png" className="landing-logo" />
                                    <div>
                                        <h1 className="landing-title">Plataforma interoperable para la vigilancia integrada de Resistencia de los Antimicrobianos.</h1>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-4" style={{ marginTop: '25px', marginBottom: '25px' }}>
                                            <button className="btn btn-white">Descargar plantillas</button>
                                        </div>

                                        <div className="col-lg-4" style={{ marginTop: '25px', marginBottom: '25px' }}>
                                            <button className="btn btn-white">Manual de usuario</button>
                                        </div>

                                        <div className="col-lg-4" style={{ marginTop: '25px', marginBottom: '25px' }}>
                                            <button className="btn btn-white">Preguntas frecuentes</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <h1 className="landing-subtitle">
                                        Este desarrollo ha sido realizado dentro del Proyecto UNJP/PER/060/UNJ: “RAM-MPTF: Lucha contra la resistencia a los antimicrobianos en Perú bajo el enfoque de Una salud, financiado por el Fondo Fiduciario de Asociados Múltiples (MPTF).
                                    </h1>
                                </div>
                            </div>
                            <div className="col-lg-5 text-center top-lading-content-right">
                                <img src="img/home-platram.svg" alt="" className="landing-image-content" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="movil">
            <nav className="navbar navbar-light bg-dark-platram">
                <a className="navbar-brand" href="#">
                    <img src="img/logo-platram.svg" alt="platram.png" className="landing-logo" />
                </a>
                <li className="nav-item">
                    <Link to={'/signin'} className="btn btn-white"><User size={20} style={{ marginTop: '-3px', background: 'white' }} /> Iniciar sesión</Link>
                </li>
            </nav>
            <div className="landing">
                <div className="landing-background">
                    <div className="margin-language">
                        <span className="text-white border-right-language text-bold">ESPAÑOL</span>
                        <span className="text-white">ENGLISH</span>
                    </div>

                    <div className="col-12">
                        <h2 className="text-title text-white">
                            Plataforma interoperable para la vigilancia integrada de Resistencia de los Antimicrobianos.
                        </h2>
                        <div className="pt-2">
                            <span className="text-subtitle text-white">
                                Este desarrollo ha sido realizado dentro del Proyecto UNJP/PER/060/UNJ: “RAM-MPTF: Lucha contra la resistencia a los antimicrobianos en Perú bajo el enfoque de Una salud, financiado por el Fondo Fiduciario de Asociados Múltiples (MPTF).
                            </span>
                        </div>

                        <div className="text-center pt-4">
                            <img src="img/CLIENTS.svg" alt="" style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                        <nav className="nav nav--icons">
                            <div className="row" style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                                <div className="col-4 text-center border-top-left-navbar">
                                    <FileText size={25} style={{ background: 'white' }} />
                                    <span className="navbar-text-bottom font-bold">Descargar <br /> plantillas</span>
                                </div>
                                <div className="col-4 text-center border-center-navbar">
                                    <File size={25} style={{ background: 'white' }} />
                                    <span className="navbar-text-bottom">Manual de <br /> usuario</span>
                                </div>
                                <div className="col-4 text-center border-top-right-navbar">
                                    <HelpCircle size={25} style={{ background: 'white' }} />
                                    <span className="navbar-text-bottom">Preguntas</span>
                                </div>
                            </div>
                        </nav>
                    </div>
        </div>
    </Fragment>
};

export default LandingView;