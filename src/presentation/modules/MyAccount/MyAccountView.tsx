import React from 'react';
import Layout from '../../components/Layout';
import './MyAccount.css';

const MyAccountView = () => {
    return <Layout>
        <div className='title-header'>
            <h2>Mi cuenta</h2>

            <span>😊 Visualiza tu perfil y edita si lo deseas</span>
        </div>
        <div className="col-lg-8 mx-auto">
            <div className="card card-body shadow-sm card-account">
                <div className="col-lg-11 mx-auto">
                    <div className="row" style={{ marginTop: '25px' }}>
                        <div className="col-lg-6">
                            <div className="">
                                <label htmlFor=""><i className='fa fa-user'></i> Nombres</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="">
                                <label htmlFor=""><i className='fa fa-user'></i> Apellidos</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3" style={{ marginTop: '25px' }}>
                        <div className="col-lg-6">
                            <div className="">
                                <label htmlFor=""><i className='fa fa-building'></i> Entidad</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="">
                                <label htmlFor=""><i className='fa fa-mobile'></i> Teléfono o celular</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3" style={{ marginTop: '25px', marginBottom: '25px' }}>
                        <div className="col-lg-6">
                            <div className="">
                                <label htmlFor=""><i className='fa fa-envelope'></i> Correo Institucional</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7 pt-4 mx-auto">
                    <button type="submit" className="btn btn-primary-platram btn-block">
                        <i className='fa fa-check'></i> Actualizar datos
                    </button>
                </div>
            </div>
        </div>
    </Layout>
};

export default MyAccountView;