import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { User, Download, ChevronDown, ChevronUp, FileText, File, HelpCircle } from 'react-feather';
import './TemplateView.css';

interface Props {
    changeTab(numberSelecton: number): any;
    numberTab: number;
    setOpenCollapse: any;
    openCollapse: boolean;
}

const TemplateView = (props: Props) => {

    const { changeTab, numberTab, openCollapse, setOpenCollapse } = props;

    return <Fragment>
        <div className="web">
            <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-bg-platram navbar-brand-register">
                <div className="col-lg-10-5">
                    <div className="collapse navbar-collapse top-10" id="navbarNav">
                        <img src="img/logo-login.png" alt="" width={'200px'} style={{ marginLeft: '30px' }} />
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item line-navbar-li">
                                <span className="nav-link navbar-brand-register">ESPAÑOL</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-dark">ENGLISH</span>
                            </li>
                            <li className="nav-item">
                                <Link to={'/signin'} className="btn btn-white"><User style={{ marginTop: '-3px' }} /> Iniciar sesión</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="content-body">
                <div style={{ paddingLeft: '3%' }}>
                    <button className={`btn btn-tabs ${numberTab === 1 ? 'active' : ''}`} onClick={() => changeTab(1)}>Descargar plantillas</button>

                    <button className={`btn btn-tabs ${numberTab === 2 ? 'active' : ''}`} onClick={() => changeTab(2)}>Manual de usuario</button>

                    <button className={`btn btn-tabs ${numberTab === 3 ? 'active' : ''}`} onClick={() => changeTab(3)}>Preguntas Frecuentes</button>
                </div>

                {numberTab === 1 && <section>
                    <div className="row">
                        <div className="col-7 display-flex-center">
                            <section className="col-lg-11 mx-auto">
                                <h1 className="font-bold">Descargar plantillas</h1>
                                <br />
                                <span>PlatRAM permite alimentar las siguientes plantillas para registrar datos en el sistema. Utilice los documentos de orientación adjuntos para completar estas plantillas.</span>

                                <div className="row">
                                    <div className="col-4">
                                        <div className="card shadow card-border card-spacing-padding">
                                            <div className="card-body text-center pt-4">
                                                <img src="img/excel.svg" className="margin-bottom-img" alt="excel.svg" width={'100px'} />
                                                <br />
                                                <span className="font-bold">Plantillas Excel InFARM</span>
                                                <br /><br />
                                                <span className="font-bold"><Download size={18} /> Descargar</span>
                                                <br /><br />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="card shadow card-border card-spacing-padding">
                                            <div className="card-body text-center pt-4">
                                                <img src="img/excel.svg" className="margin-bottom-img" alt="excel.svg" width={'100px'} />
                                                <br />
                                                <span className="font-bold">Plantillas Excel AnimUSE</span>
                                                <br /><br />
                                                <span className="font-bold"><Download size={18} /> Descargar</span>
                                                <br /><br />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="card shadow card-border card-spacing-padding">
                                            <div className="card-body text-center pt-4">
                                                <img src="img/excel.svg" className="margin-bottom-img" alt="excel.svg" width={'100px'} />
                                                <br />
                                                <span className="font-bold">Plantillas Excel GLASS</span>
                                                <br /><br />
                                                <span className="font-bold"><Download size={18} /> Descargar</span>
                                                <br /><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-5 text-center">
                            <img src="img/download-templates.svg" alt="download-templates.svg" className="img-fluid" />
                        </div>
                    </div>
                </section>}

                {numberTab === 2 && <section>
                    <div className="row">
                        <div className="col-7 display-flex-center">
                            <section className="col-lg-11 mx-auto">
                                <h1 className="font-bold">Manual de usuario</h1>
                                <br />
                                <span>PlatRAM permite alimentar las siguientes plantillas para registrar datos en el sistema. Utilice los documentos de orientación para completar estas plantillas.</span>

                                <div className="row">
                                    <div className="col-lg-4 mx-auto">
                                        <div className="card shadow card-border card-spacing-padding">
                                            <div className="card-body text-center pt-4">
                                                <img src="img/pdf.svg" className="margin-bottom-img" alt="excel.svg" width={'100px'} />
                                                <br />
                                                <span className="font-bold">Manual de usuario PlatRAM</span>
                                                <br /><br />
                                                <span className="font-bold"><Download size={18} /> Descargar</span>
                                                <br /><br />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 mx-auto">
                                        <div className="card shadow card-border card-spacing-padding">
                                            <div className="card-body text-center pt-4">
                                                <img src="img/pdf.svg" className="margin-bottom-img" alt="excel.svg" width={'100px'} />
                                                <br />
                                                <span className="font-bold">Manual de bases de datos</span>
                                                <br /><br />
                                                <span className="font-bold"><Download size={18} /> Descargar</span>
                                                <br /><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-5 text-center">
                            <img src="img/manual-user.svg" alt="manual-user.svg" className="img-fluid" />
                        </div>
                    </div>
                </section>}


                {numberTab === 3 && <section>
                    <div className="row pt-4">
                        <div className="col-lg-7 pt-4">
                            <section className="col-lg-11 mx-auto">
                                <h1 className="font-bold">Preguntas frecuentes</h1>
                                <br />

                                <div className="card-collapse">
                                    <div className="row">
                                        <div className="col-11">
                                            <span className="font-bold">¿Qué es PlatRAM?</span>
                                            {openCollapse && <section className="pt-2">
                                                <span>
                                                    Plataforma interoperable piloto para la vigilancia integrada de la Resistencia a los Antimicrobianos (RAM) y el Uso de Antimicrobianos (UAM) en Perú.
                                                </span>
                                            </section>}
                                        </div>
                                        <div className="col-1">
                                            {!openCollapse && <ChevronDown className="cursor-pointer" onClick={() => setOpenCollapse(!openCollapse)} />}
                                            {openCollapse && <ChevronUp className="cursor-pointer" onClick={() => setOpenCollapse(!openCollapse)} />}
                                        </div>
                                    </div>
                                </div>

                                <div className="card-collapse mt-4">
                                    <div className="row">
                                        <div className="col-11">
                                            <span className="font-bold">¿Qué es un antimicrobiano?</span>
                                        </div>
                                        <div className="col-1">
                                            <ChevronDown className="cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-collapse mt-4">
                                    <div className="row">
                                        <div className="col-11">
                                            <span className="font-bold">¿Qué es UAM?</span>
                                        </div>
                                        <div className="col-1">
                                            <ChevronDown className="cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-collapse mt-4">
                                    <div className="row">
                                        <div className="col-11">
                                            <span className="font-bold">¿Qué es RAM?</span>
                                        </div>
                                        <div className="col-1">
                                            <ChevronDown className="cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-collapse mt-4">
                                    <div className="row">
                                        <div className="col-11">
                                            <span className="font-bold">¿QuIénes pueden ver los indicadores?</span>
                                        </div>
                                        <div className="col-1">
                                            <ChevronDown className="cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-collapse mt-4">
                                    <div className="row">
                                        <div className="col-11">
                                            <span className="font-bold">¿Cómo accedo a cargar datos al sistema?</span>
                                        </div>
                                        <div className="col-1">
                                            <ChevronDown className="cursor-pointer" />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-collapse mt-4">
                                    <div className="row">
                                        <div className="col-11">
                                            <span className="font-bold">¿Los datos son seguros?</span>
                                        </div>
                                        <div className="col-1">
                                            <ChevronDown className="cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>}
            </section>


        </div>

        <div className="movil">
            <nav className="navbar navbar-light navbar-bg-platram navbar-brand-register">
                <a className="navbar-brand" href="#">
                    <img src="img/logo-login.png" alt="platram.png" className="landing-logo" />
                </a>
                <li className="nav-item">
                    <Link to={'/signin'} className="btn btn-dark-platram"><User size={20} style={{ marginTop: '-3px', background: '#202020' }} /> Iniciar sesión</Link>
                </li>
            </nav>
            <div className="margin-language-register">
                <span className="text-dark border-right-language text-bold">ESPAÑOL</span>
                <span className="text-dark">ENGLISH</span>
            </div>

            <div className="bg-primary-platform body-content-templates" style={{ overflow: 'auto', height: '77vh' }}>
                {
                    numberTab === 1 && <Fragment>
                        <h2 className="font-bold">Descargar planillas</h2>
                        <span>
                            PlatRAM permite alimentar las siguientes plantillas para registrar datos en el sistema. Utilice los documentos de orientación adjuntos para completar estas plantillas.
                        </span>
                    </Fragment>
                }

                {numberTab === 1 && <section>
                    <div className="col-12">
                        <div className="card shadow card-border card-spacing-padding">
                            <div className="card-body text-center pt-4">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="img/excel.svg" className="margin-bottom-img" alt="excel.svg" width={'auto'} />
                                    </div>
                                    <div className="col-9 text-left" style={{ paddingLeft: '40px', paddingTop: '10px' }}>
                                        <span className="font-bold" >Plantillas Excel InFARM</span>
                                        <br /><br />
                                        <span className="font-bold"><Download size={18} /> Descargar</span>
                                        <br /><br />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card shadow card-border card-spacing-padding">
                            <div className="card-body text-center pt-4">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="img/excel.svg" className="margin-bottom-img" alt="excel.svg" width={'auto'} />
                                    </div>
                                    <div className="col-9 text-left" style={{ paddingLeft: '40px', paddingTop: '10px' }}>
                                        <span className="font-bold" >Plantillas Excel base de datos AnimUSE</span>
                                        <br /><br />
                                        <span className="font-bold"><Download size={18} /> Descargar</span>
                                        <br /><br />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card shadow card-border card-spacing-padding">
                            <div className="card-body text-center pt-4">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="img/excel.svg" className="margin-bottom-img" alt="excel.svg" width={'auto'} />
                                    </div>
                                    <div className="col-9 text-left" style={{ paddingLeft: '40px', paddingTop: '10px' }}>
                                        <span className="font-bold" >Plantillas Excel base de datos GLASS</span>
                                        <br /><br />
                                        <span className="font-bold"><Download size={18} /> Descargar</span>
                                        <br /><br />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>}

                {
                    numberTab === 2 && <Fragment>
                        <h2 className="font-bold">Manual de usuario</h2>
                        <span>
                            PlatRAM permite alimentar las siguientes plantillas para registrar datos en el sistema. Utilice los documentos de orientación para completar estas plantillas.
                        </span>
                    </Fragment>
                }

                {numberTab === 2 && <section>
                    <div className="col-12">
                        <div className="card shadow card-border card-spacing-padding">
                            <div className="card-body text-center pt-4">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="img/pdf.svg" className="margin-bottom-img" alt="excel.svg" width={'auto'} />
                                    </div>
                                    <div className="col-9 text-left" style={{ paddingLeft: '40px', paddingTop: '10px' }}>
                                        <span className="font-bold" >Manual de usuario PlatRAM</span>
                                        <br /><br />
                                        <span className="font-bold"><Download size={18} /> Descargar</span>
                                        <br /><br />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card shadow card-border card-spacing-padding">
                            <div className="card-body text-center pt-4">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="img/pdf.svg" className="margin-bottom-img" alt="excel.svg" width={'auto'} />
                                    </div>
                                    <div className="col-9 text-left" style={{ paddingLeft: '40px', paddingTop: '10px' }}>
                                        <span className="font-bold" >Manual de usuario PlatRAM</span>
                                        <br /><br />
                                        <span className="font-bold"><Download size={18} /> Descargar</span>
                                        <br /><br />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card shadow card-border card-spacing-padding">
                            <div className="card-body text-center pt-4">
                                <div className="row">
                                    <div className="col-3">
                                        <img src="img/pdf.svg" className="margin-bottom-img" alt="excel.svg" width={'auto'} />
                                    </div>
                                    <div className="col-9 text-left" style={{ paddingLeft: '40px', paddingTop: '10px' }}>
                                        <span className="font-bold" >Manual de usuario PlatRAM</span>
                                        <br /><br />
                                        <span className="font-bold"><Download size={18} /> Descargar</span>
                                        <br /><br />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>}

                <br /><br /><br /><br />
            </div>


            <div className="wrapper">
                <nav className="nav nav--icons">
                    <div className="row" style={{ width: '100%', marginLeft: 0, marginRight: 0 }}>
                        <div className="col-4 text-center border-top-left-navbar bg-dark-platram" onClick={() => changeTab(1)}>
                            <FileText size={25} style={{ background: '#202020', color: `${numberTab === 1 ? '#B7A358' : 'white'}` }} />
                            <span className="navbar-text-bottom font-bold bg-dark-platram">Descargar <br /> plantillas</span>
                        </div>
                        <div className="col-4 text-center border-center-navbar bg-dark-platram" onClick={() => changeTab(2)}>
                            <File size={25} style={{ background: '#202020', color: `${numberTab === 2 ? '#B7A358' : 'white'}` }} />
                            <span className="navbar-text-bottom text-white bg-dark-platram">Manual de <br /> usuario</span>
                        </div>
                        <div className="col-4 text-center border-top-right-navbar bg-dark-platram" onClick={() => changeTab(3)}>
                            <HelpCircle size={25} style={{ background: '#202020', color: `${numberTab === 3 ? '#B7A358' : 'white'}` }} />
                            <span className="navbar-text-bottom bg-dark-platram">Preguntas</span>
                        </div>
                    </div>
                </nav>
            </div>

        </div>

    </Fragment>
}

export default TemplateView;