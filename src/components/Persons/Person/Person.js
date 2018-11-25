import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
	constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
  }
	render() {
		console.log('[Person.js] Inside render()');
		return (
			<div className={classes.Person} >
				<p onClick={this.props.click}>I'm {this.props.name}. I'm {this.props.age} years old. Here's a random number: { Math.floor(Math.random()*30) }</p>
				<p>{this.props.children}</p>
				<input type="text" value={this.props.name} onChange={this.props.changed}/>
			</div>
		)
	}
}

export default Person;
