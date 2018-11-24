import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium'; //StyleRoot only necessary if doing media queries inline
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Madeleine', age: 29 },
      { id: 2, name: 'Michael', age: 29 },
      { id: 3, name: 'Sabrina', age: 30 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    //dont want to mutate state so can create a new object with spread operator
    const person = { ...this.state.persons[personIndex] };
    //other way to not mutate state is using Object.assign:
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    //again not mutating state by creating new array
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({ persons });
    }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    //or const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }


  render() {
    const style = {
      backgroundColor: 'aqua',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8 px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
              return <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = ['purple'];
    if(this.state.persons.length <= 2) classes.push('red');
    if(this.state.persons.length <= 1) classes.push('bold');

    return (
      <StyleRoot>
        <div className="App">
        <h1>Hi i'm a React App</h1>
        <p className={classes.join(' ')}>Madeleine is Awesome!</p>
        <button
          style={style}
          // onClick={() => this.switchNameHandler('Madeleine Rose')}>Switch Name</button>
          onClick={this.togglePersonsHandler}>Show Persons</button>
          { persons }
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
