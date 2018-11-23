import React from 'react';
import './Person.css';

const Person = (props) => {
	return (
		<div className="Person" >
			<p onClick={props.click}>I'm {props.name}. I'm {props.age} years old. Here's a random number: { Math.floor(Math.random()*30) }</p>
			<p>{props.children}</p>
			<input type="text" value={props.name} onChange={props.changed}/>
		</div>
	)
}

export default Person;
