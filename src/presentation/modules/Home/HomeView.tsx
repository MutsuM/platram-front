import React from "react";
import './Home.css';
import Layout from "../../components/Layout";
import Donut from "./Components/Donut";
import Column from "./Components/Column";
import Activity from "./Components/Activity";
import Progress from "./Components/Progress";
import { Search } from "react-feather";

const HomeView = () => {
    return <Layout>
        <div className='title-header'>
            <h2>Dashboard</h2>
        </div>

        <div className="col-lg-12 pt-4">
            <div className="row">
                <div className="col-lg-2">
                    <button className="btn btn-primary-entity btn-block">Mi entidad</button>
                </div>

                <div className="col-lg-2">
                    <button className="btn btn-primary-other-entity btn-block">Otras entidades</button>
                </div>

                <div className="col-lg-3" style={{ marginTop: '-2rem' }}>
                    <div className="form-group">
                        <label htmlFor="">Inicio</label>
                        <input type="date" className="form-control border-form-control" />
                    </div>
                </div>

                <div className="col-lg-3" style={{ marginTop: '-2rem' }}>
                    <div className="form-group">
                        <label htmlFor="">Fin</label>
                        <input type="date" className="form-control border-form-control" />
                    </div>
                </div>

                <div className="col-lg-2">
                    <button type="submit" className="btn btn-primary-search btn-sm-platram btn-block">
                        Buscar <Search />
                    </button>
                </div>

            </div>
        </div>

        <div className="col-lg-12 pt-4">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card card-body shadow">
                        <label htmlFor="" className="font-bold">Uso de Antimicrobianos</label>
                        <div className="row" style={{ marginTop: '60px', marginBottom: '60px' }}>
                            <div className="col-6 text-end" style={{ paddingRight: '30px' }}>
                                <img src="img/Antimicrobianos.png" alt="" style={{ width: '35%' }} />
                            </div>
                            <div className="col-6">
                                <span className="antimicrobianos-text">564kg</span>
                            </div>

                        </div>
                        <div className="col-lg-12 text-center">
                            <span>Cantidad total de antimicrobianos expresados en KG.</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card card-body shadow">
                        <label htmlFor="" className="font-bold">Uso de Antimicrobianos en crustáceos</label>
                        <div className="row" style={{ marginTop: '60px', marginBottom: '60px' }}>
                            <div className="col-6 text-end" style={{ paddingRight: '30px' }}>
                                <img src="img/Antimicrobianos-crustaceos.png" alt="" style={{ width: '35%' }} />
                            </div>
                            <div className="col-6">
                                <span className="antimicrobianos-text">564kg</span>
                            </div>

                        </div>
                        <div className="col-lg-12 text-center">
                            <span>Cantidad total de antimicrobianos expresados en Kg utilizados en crustáceos entre 01/10/2022 - 01/10/2023</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row pt-4">
                <div className="col-lg-6">
                    <div className="card card-body shadow">
                        <label htmlFor="" className="font-bold">Uso de Antimicrobianos</label>
                        <div className="row" style={{ marginTop: '60px', marginBottom: '60px' }}>
                            <div className="col-6 text-end" style={{ paddingRight: '30px' }}>
                                <img src="img/Antimicrobianos.png" alt="" style={{ width: '35%' }} />
                            </div>
                            <div className="col-6">
                                <span className="antimicrobianos-text">876kg</span>
                            </div>

                        </div>
                        <div className="col-lg-12 text-center">
                            <span>Cantidad toal de antimicrobianos expresados en mg/kg de biomasa animal de animales actuáticos.</span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card card-body shadow">
                        <label htmlFor="" className="font-bold">Uso de Antimicrobianos</label>
                        <div className="row" style={{ marginTop: '60px', marginBottom: '60px' }}>
                            <div className="col-6 text-end" style={{ paddingRight: '30px' }}>
                                <img src="img/Antimicrobianos-crustaceos.png" alt="" style={{ width: '35%' }} />
                            </div>
                            <div className="col-6">
                                <span className="antimicrobianos-text">876kg</span>
                            </div>

                        </div>
                        <div className="col-lg-12 text-center">
                            <span>Cantidad toal de antimicrobianos expresados en mg/kg de biomasa animal de animales actuáticos.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}

export default HomeView;