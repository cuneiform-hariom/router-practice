import React from 'react'
import { Link, NavLink, Outlet, useNavigation } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import GlobalLoader from './GlobalLoader'

const RootLayout = () => {
    const navigation = useNavigation()
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">React Router</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/career">Career</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <Breadcrumb/>
            </header>
            {navigation.state === "loading" && <GlobalLoader />}
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default RootLayout
