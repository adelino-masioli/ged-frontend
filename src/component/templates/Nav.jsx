import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/img/avatar.png'

export default props =>
    <nav className="navbar navbar-static-top">
        <Link to="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
        </Link>
        <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
                
                <li className="dropdown user user-menu">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                        <img src={logo} className="user-image" alt=""/>
                        <span className="hidden-xs">Alexander Pierce</span>
                    </Link>
                    <ul className="dropdown-menu">
                        <li className="user-header">
                            <img src={logo} className="img-circle" alt="" />
                            <p>
                            Alexander Pierce - Web Developer
                            <small>Member since Nov. 2012</small>
                            </p>
                        </li>

                        <li className="user-body">
                            <div className="row">
                                <div className="col-xs-4 text-center">
                                    <Link to="#">Followers</Link>
                                </div>
                                <div className="col-xs-4 text-center">
                                    <Link to="#">Sales</Link>
                                </div>
                                <div className="col-xs-4 text-center">
                                    <Link to="#">Friends</Link>
                                </div>
                            </div>
                        </li>
                        <li className="user-footer">
                            <div className="pull-left">
                            <Link to="#" className="btn btn-default btn-flat">Profile</Link>
                            </div>
                            <div className="pull-right">
                            <Link to="#" className="btn btn-default btn-flat">Sign out</Link>
                            </div>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    </nav>
