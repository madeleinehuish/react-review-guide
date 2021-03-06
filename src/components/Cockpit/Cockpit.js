import React from 'react';
import classes from './Cockpit.css';

const Cockpit =(props) => {

	const assignedClasses = [classes.purple]; //set to [''] if want to start with empty array
	let btnClass= '';
	if(props.showPersons) {
		btnClass = classes.Red;
	}
	if ( props.persons.length <= 2 ) {
		assignedClasses.push( classes.red ); // classes = ['red']
	}
	if ( props.persons.length <= 1 ) {
		assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{ props.appTitle }</h1>
			<p className={assignedClasses.join( ' ' )}>Madeleine is Fucking Awesome!</p>
			<button
				className={btnClass}
				onClick={props.clicked}>Toggle Persons</button>
		</div>
	);
}

export default Cockpit;
