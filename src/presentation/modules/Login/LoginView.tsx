import React from "react";
import './Login.css';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';

const LoginView = () => {
    return <div className="container-fluid">
        <div className="row">
            <nav className="navbar-movil navbar navbar-light bg-dark-platram navbar-border" style={{width: '100%'}}>
                <img src="img/landing-logo.png" alt="landing-logo.png" width={'150px'} className="logo-navbar-image" />
            </nav>
            <div className="col-md-6 login-image desktop display-flex-center">
                <div>
                    <div className="text-center">
                        <img src="img/logo-login.png" style={{ width: '40%' }} />
                    </div>
                    <div className="text-center" style={{ paddingTop: '60px' }}>
                        <img src="img/login-images.png" style={{ width: '60%' }} />
                    </div>
                </div>
            </div>
            <div className="col-md-6 movil-padding-login login-container display-flex-center display-flex-center">
                <div className="container movil-no-container">
                    <div className="col-lg-7 mx-auto">
                        <div className="login-form">
                            <h2 className="text-login text-center-movil text-bold-movil">Iniciar Sesión</h2>
                            <div className="form-group input-botton-login">
                                <input type="text" className="form-control" placeholder="Correo electrónico" />
                            </div>
                            <div className="input-group input-botton-login">
                                <input type="password" className="form-control input-password-border-right-none" id="password" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="toggle-password" />
                                <div className="input-group-append">
                                    <span className="input-group-text input-password-border-none" id="toggle-password">
                                        <i className="fa fa-eye-slash" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary-platram btn-block">
                                <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Ingresar <ArrowRight /></Link>
                            </button>
                            <br />
                            <hr />
                            <div className="text-end-movil">
                                <span className="text-bold-movil">¿No tienes una cuenta? <Link to={'/sing-in'}>Regístrate</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default LoginView;