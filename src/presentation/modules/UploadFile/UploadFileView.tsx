import React from "react"
import Layout from "../../components/Layout";

const UploadFileView = () => {
    return (
        <Layout>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <div className="col-lg-4 text-center">
                <div className="card card-body shadow tex-center" style={{ textAlign: 'center' }}>
                    <label htmlFor="">Puedes subir un archivo .txt y .excel con un peso máximo de 2MB</label>
                    <div>
                        <button className="btn btn-primary-upload-dark">Entendido, subir archivo</button>
                    </div>
                </div>
            </div>
            </div>
        </Layout>
    );
}

export default UploadFileView;