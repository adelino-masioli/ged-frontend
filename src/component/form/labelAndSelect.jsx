import React, {Component} from 'react'
import Grid from '../../component/layout/layoutGrid'

class labelAndSelect extends Component {
	render () {
		const  selectSelect = this.props.pupolate;
		const  option = this.props.option;
		if(selectSelect.length > 0){
		  var optionItems = selectSelect.map((item) =>
		  	<option key={item.id}  value={item.id}>{item[option]}</option>
		  );
	    }else{
			optionItems = <option  value=''>No results</option>
	    }
		return (
			<Grid cols={this.props.cols}>
				<div className='form-group'>
					<label htmlFor={this.props.name}>{this.props.label}</label>
					<select  {...this.props.input} name={this.props.name}
						className='form-control select2 select2-hidden-accessible'
						tabIndex='-1'
						aria-hidden='true'
						type={this.props.type}
						onChange={this.props.onchange}
						value={this.props.value}
						disabled={this.props.readOnly}
						readOnly={this.props.readOnly} 
						>
						<option value='' defaultValue>Selecione</option>
						{optionItems}
					</select>
				</div>
			</Grid>
		)
	}

}
export default labelAndSelect;