import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
	}

	//useful to check if component only received certain props and re-render on those chosen props only
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, ' ',nextState);
		// return false; //will cause component NOT to update (but persons will still get deleted ie state will still change)
		return nextProps.persons !== this.props.persons;
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, ' ',nextState);
	}

	componentDidUpdate(nextProps, nextState) {
		console.log('[UPDATE Persons.js] Inside componentDidUpdate', nextProps, ' ',nextState);
	}

	render() {
		console.log('[Persons.js] Inside render()');
		return this.props.persons.map(( person, index ) => {
				return (
						<Person
							key={(person.name+person.age)}
							click={() => this.props.clicked( index )}
							name={person.name}
							age={person.age}
							changed={( event ) => this.props.changed( event, person.id )} />
				)
			})
	}

}


export default Persons;
