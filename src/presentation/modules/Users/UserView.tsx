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

                        <div className="item-user">
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
                    </div>
                </div>
            </div>
            <div className="col-lg-5">
                <div style={{ marginLeft: '40px', marginTop: '20px' }}>
                    <button className='btn btn-danger'>
                        <i className='fa fa-plus'></i>
                        {' '}Agregar usuarios
                    </button>
                </div>
            </div>
        </div>
    </Layout>
};

export default UserView;