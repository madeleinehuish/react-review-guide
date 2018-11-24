import React from 'react';
import Radium from 'radium';
import './Person.css';

const Person = (props) => {
	const style ={
		'@media (min-width: 500px)': {
			width: '450px'
		}
	}

	return (
		<div className="Person" style={style}>
			<p onClick={props.click}>I'm {props.name}. I'm {props.age} years old. Here's a random number: { Math.floor(Math.random()*30) }</p>
			<p>{props.children}</p>
			<input type="text" value={props.name} onChange={props.changed}/>
		</div>
	)
}

export default Radium(Person);
