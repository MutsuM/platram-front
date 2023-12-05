import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <ul className="list-unstyled">

            <div className='border-name'>
                <h3>Hola! Julian</h3>
            </div>

            <li className='sidebar-action'>
                <Link to={'/home'}><i className='fa fa-home'></i> <span>Principal</span></Link>
            </li>
            <li className='sidebar-action'>
                <Link to={'/my-files'}><i className='fa fa-th-large'></i> <span>Mis Archivos</span></Link>
            </li>

            <div className='border-setting'>
                <span className='text-settings'>CONFIGURACIÓN</span>
            </div>

            <li className='sidebar-action'>
                <Link to={'/my-account'}><i className='fa fa-user'></i> <span>Mi cuenta</span></Link>
            </li>
            <li className='sidebar-action'>
                <Link to={'/users'}><i className='fa fa-user-plus'></i> <span>Usuarios</span></Link>
            </li>
            <li className='sidebar-action'>
                <Link to={'/roles'}><i className='fa fa-user-circle'></i> <span>Roles</span></Link>
            </li>
        </ul>
    );
}

export default Sidebar;