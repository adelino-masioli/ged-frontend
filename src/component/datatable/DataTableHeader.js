import React, {Component} from 'react';

class DataTableHeader extends Component {
    render() {
        let headerTitle = this.props.headerTitle;
        let head = headerTitle.map((res, index) =>
            <th className='text-center' key={index}>{res}</th>
        );
        return (
            <thead>
                <tr>
                    {head}
                </tr>
            </thead>
        )
    }
}
export default DataTableHeader
