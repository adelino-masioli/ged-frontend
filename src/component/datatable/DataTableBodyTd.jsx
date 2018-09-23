import React, {Component} from 'react';

class DataTableBodyTd extends Component {
    render() {
        const dataTatleTd = ['id', 'name', 'email', 'role'];	
        let td = dataTatleTd.map((res, index) =>
            <td key={index}>Junior</td>
        );
        return (
            <span>{td}</span>
        )
    }
}
export default DataTableBodyTd
