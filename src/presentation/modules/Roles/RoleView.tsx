import React from 'react';
import Layout from '../../components/Layout';
import './Role.css';

const RoleView = () => {
    return <Layout>
        <div className='title-header'>
            <h2>Roles</h2>

            <span>😊 Detega permisos en los roles que desees</span>
        </div>
        <div className="col-lg-10 mx-auto list-roles">

            <div className="col-lg-12 pt-4">
                <div className="card card-body shadow">
                    <h5>Mi lista de usuarios</h5>

                    <div className="item-role">
                        <div className="row pt-2">
                            <div className="col-2">
                                <i className='fa fa-user'></i> Rol 1
                            </div>
                            <div className="col-5">
                                <i className='fa fa-user'></i> Persona Asignada
                            </div>

                            <div className="col-2 text-right">
                                <i className='fa fa-edit'></i>
                            </div>

                            <div className="col-2">
                                <i className='fa fa-list'></i>
                            </div>
                        </div>
                    </div>

                    <div className="item-role">
                        <div className="row pt-2">
                            <div className="col-2">
                                <i className='fa fa-user'></i> Rol 2
                            </div>
                            <div className="col-5">
                                <i className='fa fa-user'></i> Persona Asignada
                            </div>

                            <div className="col-2 text-right">
                                <i className='fa fa-edit'></i>
                            </div>

                            <div className="col-2">
                                <i className='fa fa-list'></i>
                            </div>
                        </div>
                    </div>

                    <div className="item-role">
                        <div className="row pt-2">
                            <div className="col-2">
                                <i className='fa fa-user'></i> Rol 3
                            </div>
                            <div className="col-5">
                                <i className='fa fa-user'></i> Persona Asignada
                            </div>

                            <div className="col-2 text-right">
                                <i className='fa fa-edit'></i>
                            </div>

                            <div className="col-2">
                                <i className='fa fa-list'></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Layout>
};

export default RoleView;