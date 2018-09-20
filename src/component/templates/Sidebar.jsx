import './Sidebar.css';
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="main-sidebar">
        <section className="sidebar">
            <ul className="sidebar-menu" data-widget="tree">
                <li className="header">MENU</li>
                <li className="active treeview menu-open">
                    <Link to="#">
                        <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li><Link to="#"><i className="fa fa-circle-o"></i> Dashboard v1</Link></li>
                        <li className="active"><Link to="#"><i className="fa fa-circle-o"></i> Dashboard v2</Link></li>
                    </ul>
                </li>
            </ul>
        </section>
    </aside>
