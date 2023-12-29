import React from 'react';
import Layout from '../../components/Layout';
import './MyFiles.css';
import { Download, Trash, Trash2, Upload } from 'react-feather';

interface Props {
    files: any[];
    sectionTab: boolean;
    changeTab: any;
}

const MyFilesView = (props: Props) => {

    const { files, sectionTab, changeTab } = props;

    return (
        <Layout>

            <div className='title-header'>
                <h2>Mis archivos</h2>

                <span>Visualiza, descarga y elimina el archivo que desees</span>
            </div>

            <div className="card card-body mb-3">

                <div className="col-lg-11 mx-auto pt-2">
                    <div className="row tabs-border">
                        <div className={`col-2 ${!sectionTab && 'tabs-border-active'} text-center pb-2`} onClick={changeTab}>
                            <span>Archivos .txt</span>
                        </div>
                        <div className={`col-2 ${sectionTab && 'tabs-border-active'} text-center pb-2`} onClick={changeTab}>
                            <span>Archivos .xml</span>
                        </div>
                    </div>
                </div>

                {!sectionTab && <div className="col-lg-11 mx-auto" style={{ marginTop: '15px' }}>
                    <span style={{ marginLeft: '-15px' }}>10 archivos</span>
                    <div className="row pb-4">

                        {files && files.map((e: any) => <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-7 mx-auto">
                                <img src="img/txt.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center pt-2">
                                <span className='font-bold' style={{ fontSize: '14px' }}>
                                    Microbianos.xml
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <div className='pt-2'>
                                    <Download style={{ color: '#B0B0B0' }} />
                                    <Trash2 className='ml-4' style={{ color: '#B0B0B0' }} />
                                </div>
                            </div>
                        </div>)}

                    </div>
                </div>}

                {sectionTab && <div className="col-lg-11 mx-auto" style={{ marginTop: '15px' }}>
                    <span style={{ marginLeft: '-15px' }}>10 archivos</span>
                    <div className="row pb-4">

                        {files && files.map((e: any) => <div className="col-lg-2 touchpad-mouse">
                            <div className="col-lg-7 mx-auto">
                                <img src="img/excel.png" alt="" className='img-fluid' />
                            </div>
                            <div className="col-lg-12 text-center pt-2">
                                <span className='font-bold' style={{ fontSize: '14px' }}>
                                    Microbianos.xml
                                </span>

                                <label htmlFor=""><small>Fecha de carga: 07/10/2023</small></label>
                                <div className='pt-2'>
                                    <Download style={{ color: '#B0B0B0' }} />
                                    <Trash2 className='ml-4' style={{ color: '#B0B0B0' }} />
                                </div>
                            </div>
                        </div>)}

                    </div>
                </div>}
            </div>
        </Layout>
    );
}

export default MyFilesView;