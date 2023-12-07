import React from 'react';
import Layout from '../../components/Layout';
import './User.css';

const UserView = () => {
    return <Layout>

        <div className='title-header'>
            <h2>Usuarios</h2>
        </div>

        <div className='row pt-4'>
            <div className="col-lg-7 list-users">
                <div className="btn btn-danger">
                    Ver usuarios
                </div>

                <div className="btn btn-outline-danger ml-4">
                    Pendientes de aprobación
                </div>

                <div className="col-lg-12 pt-4">
                    <div className="card card-body shadow">
                        <h5>Mi lista de usuarios</h5>

                        <div className="item-user pt-2">
                            <div className="row pt-2">
                                <div className="col-lg-6">
                                    <i className='fa fa-user'></i> Jesús Miguel Oliarte Paz
                                </div>
                                <div className="col-lg-6">
                                    <i className='fa fa-building'></i> SENASA
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-lg-6">
                                    <i className='fa fa-mobile'></i> 999 888 777
                                </div>
                                <div className="col-lg-6">
                                    <i className='fa fa-envelope'></i> jesusoliarte@digesa.pe
                                </div>
                            </div>
                        </div>

                        <div className="item-user">
                            <div className="row pt-4">
                                <div className="col-lg-6">
                                    <i className='fa fa-user'></i> Jesús Miguel Oliarte Paz
                                </div>
                                <div className="col-lg-6">
                                    <i className='fa fa-building'></i> SENASA
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-lg-6">
                                    <i className='fa fa-mobile'></i> 999 888 777
                                </div>
                                <div className="col-lg-6">
                                    <i className='fa fa-envelope'></i> jesusoliarte@digesa.pe
                                </div>
                            </div>
                        </div>

                        <div className="item-user">
                            <div className="row pt-4">
                                <div className="col-lg-6">
                                    <i className='fa fa-user'></i> Jesús Miguel Oliarte Paz
                                </div>
                                <div className="col-lg-6">
                                    <i className='fa fa-building'></i> SENASA
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-lg-6">
                                    <i className='fa fa-mobile'></i> 999 888 777
                                </div>
                                <div className="col-lg-6">
                                    <i className='fa fa-envelope'></i> jesusoliarte@digesa.pe
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div style={{ marginLeft: '40px', marginTop: '20px' }}>
                    <button className='btn btn-danger' data-toggle="modal" data-target="#exampleModal">
                        <i className='fa fa-plus'></i>
                        {' '}Agregar usuarios
                    </button>
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