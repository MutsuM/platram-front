import React from 'react';
import Layout from '../../components/Layout';
import './MyAccount.css';

const MyAccountView = () => {
    return <Layout>
        <div className='title-header'>
            <h2>Mi cuenta</h2>

            <span>Visualiza tu perfil y edita si lo deseas</span>
        </div>
        <div className="col-lg-12">
            <div className="card card-body shadow-sm card-account">
                <div className="col-lg-10 mx-auto">
                    <div className="row" style={{ marginTop: '25px' }}>
                        <div className="col-lg-6">
                            <div className="pt-2">
                                <label htmlFor="">Nombres</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="pt-2">
                                <label htmlFor="">Apellidos</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3" style={{ marginTop: '25px' }}>
                        <div className="col-lg-6">
                            <div className="pt-2">
                                <label htmlFor="">Entidad</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="pt-2">
                                <label htmlFor="">Celular</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3" style={{ marginTop: '25px', marginBottom: '25px' }}>
                        <div className="col-lg-6">
                            <div className="pt-2">
                                <label htmlFor="">Correo Institucional</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 pt-4 mx-auto">
                    <button type="submit" className="btn btn-primary-platram btn-block">
                        Actualizar datos
                    </button>
                </div>
            </div>
        </div>
    </Layout>
};

export default MyAccountView;