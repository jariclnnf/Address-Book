import React, { Component } from 'react';
import {generate} from 'randomstring';
import AddressBook  from './components/AddressBook';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import './App.css';

class App extends Component {

  state = {
    Contacts: [
      {
        id : generate(10),
        FirstName : 'Cathy',
        LastName : 'Pierce',
        Birthday : '9/14/1996',
        Telephone : '200-910-8132'
      },
      {
        id : generate(10),
        FirstName: 'Alfonso',
        LastName: 'Cooley',
        Birthday: '8/10/1973',
        Telephone: '200-657-9362'
      },
      {
        id : generate(10),
        FirstName: 'Victor',
        LastName: 'Gordon',
        Birthday: '8/3/1970',
        Telephone: '200-661-9407'
      },
      {
        id : generate(10),
        FirstName: 'Colleen',
        LastName: 'Wright',
        Birthday: '10/28/1967',
        Telephone: '200-250-7949'
      },
      {
        id : generate(10),
        FirstName: 'James',
        LastName: 'Johnston',
        Birthday: '5/11/1972',
        Telephone: '200-645-3176'
      },
      {
        id : generate(10),
        FirstName: 'Anna',
        LastName: 'Reyes',
        Birthday: '9/10/1975',
        Telephone: '200-707-8670'
      }
    ],
    newFirstName: '',
    newLastName: '',
    newBirthday: '',
    newTelephone: '',
    searchWord: '',
    selectedId: ''
  };


  addContactHandler = (event) => {
    event.preventDefault();

    let newContact = {
      id: generate(10),
      FirstName: this.state.newFirstName,
      LastName: this.state.newLastName,
      Birthday: this.state.newBirthday,
      Telephone: this.state.newTelephone
    };

    this.setState({
      Contacts: [...this.state.Contacts, newContact],
      newFirstName: '',
      newLastName: '',
      newBirthday: '',
      newTelephone: ''
    });
  }
  
  render() {
    
    return (
      <div className="App">
        <Container>
          <header>
            <h1>React Address book</h1>
          </header>
          <input type="text" placeholder="Search..."></input>
          <AddressBook
            contacts = {this.state.contacts}
          ></AddressBook>   
          <button>Add New Contact</button>
        </Container>
      </div>
    );
  }
}

export default App;