import './Footer.css'
import React from 'react'
import config from '../../config'

export default props =>
    <footer className="main-footer">
        <div className="pull-right hidden-xs">
            <aside dangerouslySetInnerHTML={{__html: config.APP_VERSION}} />
        </div>
        <aside dangerouslySetInnerHTML={{__html: config.APP_COPYRIGHT}} />
    </footer>