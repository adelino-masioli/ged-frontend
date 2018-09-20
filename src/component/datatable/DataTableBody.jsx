import React from 'react'

export default props =>
    <tbody>
        <tr>
            <td>1.</td>
            <td>Update software</td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar progress-bar-danger" style={{width: '55%'}}></div>
                </div>
            </td>
            <td><span className="badge bg-red">55%</span></td>
        </tr>
        <tr>
            <td>1.</td>
            <td>Update software</td>
            <td>
                <div className="progress progress-xs">
                    <div className="progress-bar progress-bar-yellow" style={{width: '72%'}}></div>
                </div>
            </td>
            <td><span className="badge bg-yellow">72%</span></td>
        </tr>
        <tr>
            <td>1.</td>
            <td>Update software</td>
            <td>
                <div className="progress progress-xs progress-striped active">
                    <div className="progress-bar progress-bar-primary" style={{width: '22%'}}></div>
                </div>
            </td>
            <td><span className="badge bg-blue">22%</span></td>
        </tr>
        <tr>
            <td>1.</td>
            <td>Update software</td>
            <td>
                <div className="progress progress-xs progress-striped active">
                    <div className="progress-bar progress-bar-success" style={{width: '82%'}}></div>
                </div>
            </td>
            <td><span className="badge bg-green">82%</span></td>
        </tr>
    </tbody>
