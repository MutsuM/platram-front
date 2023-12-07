import React from "react";
import './Login.css';
import { Link } from 'react-router-dom';

const LoginView = () => {
    return <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 login-image" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div >
                    <div className="text-center">
                        <img src="img/platram.png" alt="" />
                    </div>
                    <div style={{paddingTop: '60px'}}>
                        <img src="img/login.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-6 login-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="container">
                    <div className="col-10 mx-auto">
                        <div className="login-form shadow-sm">
                            <h2 className="text-login">Iniciar Sesión</h2>
                            <div className="form-group">
                                <label className="text-size-15"><i className="fa fa-envelope" style={{color: '#9F9F9F'}}></i> Correo asociado</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-size-15"><i className="fa fa-lock" style={{color: '#9F9F9F'}}></i> Contraseña</label>
                                <input type="password" className="form-control" />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary-platram btn-block">
                                <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa fa-check"></i> Ingresar</Link>
                            </button>
                            <br />
                            <hr />
                            <div>
                                <span>¿No tienes una cuenta? <Link to={'/sing-in'}>Regístrate</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default LoginView;