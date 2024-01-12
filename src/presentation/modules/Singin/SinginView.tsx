import React from "react";
import { Link } from 'react-router-dom';
import './Singin.css';

const SinginView = () => {
    return <div className="container-fluid">
        <div className="row">
            <nav className="navbar-movil navbar navbar-light bg-dark-platram navbar-border" style={{ width: '100%' }}>
                <img src="img/landing-logo.png" alt="landing-logo.png" width={'150px'} className="logo-navbar-image" />
            </nav>
            <div className="col-md-6 login-image desktop display-flex-center">
                <div >
                    <div className="text-end">
                        <img src="img/logo-login.png" style={{ width: '20%', marginRight: '13em' }} alt="logo-login.png" />
                    </div>
                    <div className="text-center" style={{ paddingTop: '70px' }}>
                        <img src="img/login-images.png" style={{ width: '60%' }} alt="login-images.png" />
                    </div>
                </div>
            </div>
            <div className="col-md-6 movil-padding-register login-container display-flex-center">
                <div className="container movil-no-container">
                    <div className="col-lg-7 mx-auto">
                        <div className="mb-4">
                            <Link to={'/signin'} className="text-no-link text-dark"><i className="fa fa-angle-left"></i> Regresar</Link>
                        </div>
                        <div className="login-form">
                            <h2 className="text-login font-bold text-center-movil text-bold-movil">Registrarse</h2>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Nombres" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Apellidos" />
                            </div>
                            <div className="form-group">
                                <select className="form-control" placeholder="Entidad">
                                    <option value="">Entidad</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Celular" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Correo institucional" />
                            </div>
                            <div className="form-group form-check text-bold-movil">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Al registrar al usuario acepta las <span className="text-color-politics">Políticas de privacidad</span> de datos registrados en el sistema</label>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary-platram btn-block">
                                <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Registrar usuario</Link>
                            </button>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SinginView;