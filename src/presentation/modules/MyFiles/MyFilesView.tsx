import React from 'react';
import Layout from '../../components/Layout';
import './MyFiles.css';

const MyFilesView = () => {
    return (
        <Layout>

            <div className='title-header'>
                <h2>Mis archivos</h2>

                <span>😊 Visualiza, descarga y elimina el archivo que desees</span>
            </div>

            <div className="card card-body">

                <div className="col-lg-12">
                    <span className="badge badge-primary">
                        2023
                    </span>

                    <span className="badge badge-secondary ml-3">
                        2022
                    </span>

                    <span className="badge badge-secondary ml-3">
                        2021
                    </span>
                </div>

                <div className="col-lg-12 pt-4">
                    <h5>.txt</h5>
                    <div className="row pt-4 pb-4">
                        <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-5 mx-auto">
                                <img src="img/notepad.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center">
                                <span className="badge badge-secondary">
                                    Informesellado.txt
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <button className='btn btn-success btn-download'>Descargar</button>
                            </div>
                        </div>

                        <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-5 mx-auto">
                                <img src="img/notepad.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center">
                                <span className="badge badge-secondary">
                                    Informesellado.txt
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <button className='btn btn-success btn-download'>Descargar</button>
                            </div>
                        </div>

                        <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-5 mx-auto">
                                <img src="img/notepad.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center">
                                <span className="badge badge-secondary">
                                    Informesellado.txt
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <button className='btn btn-success btn-download'>Descargar</button>
                            </div>
                        </div>

                        <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-5 mx-auto">
                                <img src="img/notepad.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center">
                                <span className="badge badge-secondary">
                                    Informesellado.txt
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <button className='btn btn-success btn-download'>Descargar</button>
                            </div>
                        </div>

                        <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-5 mx-auto">
                                <img src="img/notepad.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center">
                                <span className="badge badge-secondary">
                                    Informesellado.txt
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <button className='btn btn-success btn-download'>Descargar</button>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-12">
                    <h5>.excel</h5>
                    <div className="row pt-4 pb-4">
                        <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-5 mx-auto">
                                <img src="img/excel.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center">
                                <span className="badge badge-secondary">
                                    Microbianos.xml
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <button className='btn btn-success btn-download'>Descargar</button>
                            </div>
                        </div>

                        <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-5 mx-auto">
                                <img src="img/excel.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center">
                                <span className="badge badge-secondary">
                                    Microbianos.xml
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <button className='btn btn-success btn-download'>Descargar</button>
                            </div>
                        </div>

                        <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-5 mx-auto">
                                <img src="img/excel.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center">
                                <span className="badge badge-secondary">
                                    Microbianos.xml
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <button className='btn btn-success btn-download'>Descargar</button>
                            </div>
                        </div>

                        <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-5 mx-auto">
                                <img src="img/excel.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center">
                                <span className="badge badge-secondary">
                                    Microbianos.xml
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <button className='btn btn-success btn-download'>Descargar</button>
                            </div>
                        </div>

                        <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-5 mx-auto">
                                <img src="img/excel.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center">
                                <span className="badge badge-secondary">
                                    Microbianos.xml
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <button className='btn btn-success btn-download'>Descargar</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default MyFilesView;