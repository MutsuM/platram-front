import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface Props {
    children?: any;
}

const Layout = (props: Props) => {

    return (
        <Fragment>
            <Navbar />

            <div className="d-flex" id="wrapper">
                <div className="text-white sidebar">
                    <Sidebar />
                </div>

                <div id="page-content-wrapper" className="content">
                    <div className="container-fluid">
                        {props.children}
                    </div>
                </div>
            </div>

        </Fragment>
    );

}

export default Layout;