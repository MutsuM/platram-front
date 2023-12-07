import React from "react";
import { Link } from 'react-router-dom';

const SinginView = () => {
    return <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 login-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div >
                    <div className="text-center">
                        <img src="img/platram.png" alt="" />
                    </div>
                    <div className="col-lg-6 mx-auto text-center" style={{paddingTop: '20px', color: 'white'}}>
                        <label htmlFor="">
                            Plataforma interoperable para la vigilancia integrada de Resistencia de los Antimicrobianos
                        </label>
                    </div>
                    <div style={{ paddingTop: '40px', textAlign: 'center' }}>
                        <img src="img/login.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-6 login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="container">
                    <div className="col-10 mx-auto">
                        <div className="mb-4">
                        <Link to={'/'} className="btn btn-primary-goback shadow-sm"><i className="fa fa-angle-left"></i> Regresar</Link>
                        </div>
                        <div className="login-form shadow-sm">
                            <h2 className="text-login">Registrarse</h2>
                            <div className="form-group">
                                <label className="text-size-15"><i className="fa fa-envelope" style={{ color: '#9F9F9F' }}></i> Nombres</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-size-15"><i className="fa fa-lock" style={{ color: '#9F9F9F' }}></i> Apellidos</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-size-15"><i className="fa fa-building" style={{ color: '#9F9F9F' }}></i> Entidad</label>
                                <select name="" id="" className="form-control">
                                    <option value="0">Seleccionar entidad</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="text-size-15"><i className="fa fa-mobile" style={{ color: '#9F9F9F' }}></i> Teléfono o celular</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-size-15"><i className="fa fa-enevolpe" style={{ color: '#9F9F9F' }}></i> Correo institucional</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Al registrar al usuario acepta las políticas de privacidad de datos registrados en el sistema</label>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary-platram btn-block">
                                <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}><i className="fa fa-check"></i> Registrar usuario</Link>
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