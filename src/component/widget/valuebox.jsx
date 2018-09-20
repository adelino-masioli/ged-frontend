import './ValueBox.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '../layout/layoutGrid'

export default props => (
    <Grid cols={props.cols}>
        <div className="info-box">
            <span className={`info-box-icon ${props.color}`}><i className={props.icon}></i></span>

            <div className="info-box-content">
                <span className="info-box-text">{props.text}</span>
                <span className="info-box-number">{props.value}</span>
                <Link to={props.url}><small className="info-box-footer">More info  <i className='fa fa-arrow-circle-right'></i></small></Link>
            </div>
        </div>
	</Grid>
);