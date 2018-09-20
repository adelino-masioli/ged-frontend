import './Preloader.css';
import React from 'react'
import preloader from './../../assets/img/preload.gif'

export default props =>
    <span>
         <div className="preloader-wrapper">
            <div className="preloader">
                <img src={preloader} alt="" />
            </div>
        </div>
    </span>
