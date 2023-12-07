import React from "react";
import './Home.css';
import Layout from "../../components/Layout";
import Donut from "./Components/Donut";
import Column from "./Components/Column";
import Activity from "./Components/Activity";
import Progress from "./Components/Progress";

const HomeView = () => {
    return <Layout>
        <div className='title-header'>
            <h2>Dashboard</h2>

            <div className="col-lg-12 pt-4">
                <div className="row">
                    <div className="col-lg-4">
                        <button className="btn btn-primary-entity">Mi entidad</button>

                        <button className="btn btn-primary-other-entity ml-4">Otras entidades</button>
                    </div>

                    <div className="col-lg-8">
                        
                    </div>
                </div>
            </div>

            <div className="col-lg-12 pt-4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card card-body shadow">
                            <Donut />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card card-body shadow">
                            <Column />
                        </div>
                    </div>
                </div>

                <div className="row pt-4">
                    <div className="col-lg-6">
                        <div className="card card-body shadow">
                            <Activity />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card card-body shadow">
                            <Progress />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}

export default HomeView;