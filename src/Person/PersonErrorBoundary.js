import React from 'react';
import classes from './Person.css';

const Person = (props) => {
	const rnd = Math.random();

	if ( rnd > .07 ) {
		throw new Error('Something went wrong');
	}

	return (
		<div className={classes.Person} >
			<p onClick={props.click}>I'm {props.name}. I'm {props.age} years old. Here's a random number: { Math.floor(Math.random()*30) }</p>
			<p>{props.children}</p>
			<input type="text" value={props.name} onChange={props.changed}/>
		</div>
	)
}

export default Person;
