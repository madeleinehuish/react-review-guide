import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Madeleine', age: 29 },
      { name: 'Michael', age: 29 },
      { name: 'Sabrina', age: 30 }
    ]
  }

  nameChangedHandler = (event) => {
    console.log('was clicked')
    this.setState({ persons: [
      { name: 'Madeleine', age: 29 },
      { name: event.target.value, age: 29 },
      { name: 'Sabrina', age: 30 }
    ]  })
    }

  switchNameHandler = (newName) => {
    console.log('was clicked')
    this.setState({ persons: [
      { name: 'Madeleine', age: 29 },
      { name: newName, age: 29 },
      { name: 'Sabrina', age: 30 }
    ]  })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8 px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
      <h1>hi i'm a react App</h1>
      <button
        style={style}
        onClick={() => this.switchNameHandler('Madeleine Rose')}>Switch Name</button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}/>
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Awesome')} //better syntax than ab
        changed={this.nameChangedHandler}>My Hobbies: music, travel</Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
