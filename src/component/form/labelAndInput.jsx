import  './labelAndInput.css'
import React from 'react';
import Grid from '../../component/layout/layoutGrid'

export default props => (   
	<Grid cols={props.cols}>
		<div className='form-group'>
			<label htmlFor={props.name}>{props.label} </label>
			<input {...props.input} className='form-control'
			    defaultValue={props.value}
				placeholder={props.placeholder} 
				readOnly={props.readOnly} type={props.type}		
				maxLength={props.maxlength}
				onChange={props.onchange}
				name={props.name}
				/>
		</div>
	</Grid>
);