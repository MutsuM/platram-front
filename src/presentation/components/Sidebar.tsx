import React, { Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, File, User, UserPlus, Archive, Upload } from 'react-feather';

const Sidebar = () => {
    return (
        <Fragment>
            <div className="sidebar-heading">
                <Link to={'/upload'} className='btn btn-primary-upload'>
                    <Upload /> Subir documento
                </Link>
            </div>
            <ul className="list-unstyled">

                <div className='border-name'>
                    <h3>Hola! Julian</h3>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <NavLink to={'/home'} className={({ isActive }) => (isActive ? 'sidebar-action link-active' : 'sidebar-action')}>
                        <Home style={{ height: '15px', marginTop: '-3px' }} />
                        <span>{' '}Principal</span>
                    </NavLink>
                </div>

                <div>
                    <NavLink to={'/my-files'} className={({ isActive }) => (isActive ? 'sidebar-action link-active' : 'sidebar-action')}>
                        <File style={{ height: '15px', marginTop: '-3px' }} />
                        <span>{' '}Mis Archivos</span>
                    </NavLink>
                </div>

                <div className='border-setting'>
                    <span className='text-settings'>CONFIGURACIÓN</span>
                </div>

                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <NavLink to={'/my-account'} className={({ isActive }) => (isActive ? 'sidebar-action link-active' : 'sidebar-action')}>
                        <User style={{ height: '15px', marginTop: '-3px' }} />
                        <span>{' '}Mi cuenta</span>
                    </NavLink>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <NavLink to={'/users'} className={({ isActive }) => (isActive ? 'sidebar-action link-active' : 'sidebar-action')}>
                        <UserPlus style={{ height: '15px', marginTop: '-3px' }} />
                        <span>{' '}Usuarios</span>
                    </NavLink>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <NavLink to={'/roles'} className={({ isActive }) => (isActive ? 'sidebar-action link-active' : 'sidebar-action')}>
                        <Archive style={{ height: '15px', marginTop: '-3px' }} />
                        <span>{' '}Roles</span>
                    </NavLink>
                </div>
            </ul>
        </Fragment>
    );
}

export default Sidebar;