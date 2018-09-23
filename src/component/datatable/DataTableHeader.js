import React, {Component} from 'react';

class DataTableHeader extends Component {
    render() {
        let headerTitle = this.props.headerTitle;
        let head = headerTitle.map((res, index) =>
            <th className={res.class} key={index}>{res.value}</th>
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
