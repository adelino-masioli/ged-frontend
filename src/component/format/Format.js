import React, {Component} from 'react'

class Format extends Component {
	render () {
		const  dataValue = this.props.dataValue
		const  dataList = this.props.dataList
        let dataContent = dataList.map((res, index) =>
             <span key={res.id}>{dataValue === res.id && res.value}</span>
        )
        
		return (
            <span className="badge">{dataContent}</span>
		)
	}

}
export default Format;