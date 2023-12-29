import React from 'react';
import Layout from '../../components/Layout';
import './User.css';
import { User, Briefcase, Smartphone, Mail } from 'react-feather';

const UserView = () => {
    return <Layout>

        <div className='title-header'>
            <h2>Usuarios</h2>
        </div>

        <div className='row pt-4'>
            <div className="col-lg-12">
                <div className="btn btn-primary-color">
                    Ver usuarios
                </div>

                <div className="btn btn-primary-outline-color ml-4">
                    Pendientes de aprobación
                </div>

                <div className="col-lg-12 pt-4">
                    <div className="card card-body shadow">
                        <h5 style={{marginLeft: '15px'}}>Lista de usuarios</h5>

                        <div className="row pt-4">
                            <div className="col-lg-6 list-users">
                                <div className="item-user pt-4">
                                    <div className="col-lg-12">
                                        <div className="row pt-2">
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <User style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    Jesús Miguel Oliarte Paz
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Briefcase style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    SENASA
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row pt-3">
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Smartphone style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    999 888 777
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Mail style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    jesusoliarte@digesa.pe
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item-user pt-4">
                                    <div className="col-lg-12">
                                        <div className="row pt-2">
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <User style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    Jesús Miguel Oliarte Paz
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Briefcase style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    SENASA
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row pt-3">
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Smartphone style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    999 888 777
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Mail style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    jesusoliarte@digesa.pe
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="item-user pt-4">
                                    <div className="col-lg-12">
                                        <div className="row pt-2">
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <User style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    Jesús Miguel Oliarte Paz
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Briefcase style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    SENASA
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row pt-3">
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Smartphone style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    999 888 777
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Mail style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    jesusoliarte@digesa.pe
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item-user pt-4">
                                    <div className="col-lg-12">
                                        <div className="row pt-2">
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <User style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    Jesús Miguel Oliarte Paz
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Briefcase style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    SENASA
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row pt-3">
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Smartphone style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    999 888 777
                                                </span>
                                            </div>
                                            <div className="col-lg-6">
                                                <span className='text-color-user'>
                                                    <Mail style={{ marginTop: '-6px', marginRight: '10px' }} />
                                                    jesusoliarte@digesa.pe
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <div className="modal fade" id="exampleModal" tabIndex={1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="col-lg-12">
                            <div className="row pt-4">
                                <div className="col-lg-6">
                                    <label htmlFor="">Nombres</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col-lg-6">
                                    <label htmlFor="">Apellidos</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="row pt-4">
                                <div className="col-lg-6">
                                    <label htmlFor="">Entidad</label>
                                    <input type="text" className="form-control" />
                                </div>

                                <div className="col-lg-6">
                                    <label htmlFor="">Teléfono o celular</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="row pt-4">
                                <div className="col-lg-6">
                                    <label htmlFor="">Correo institucional</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-group form-check pt-4">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Al registrar al usuario acepta las políticas de privacidad de datos registrados en el sistema</label>
                            </div>

                            <div className="col-lg-7 pt-4 mx-auto mb-3">
                                <button type="submit" className="btn btn-primary-platram btn-block">
                                    <i className='fa fa-check'></i> Registrar usuarios
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
};

export default UserView;