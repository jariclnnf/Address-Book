import React, {Component} from 'react';
import App from '../App';
import Card from 'react-bootstrap/Card';

const AddressBook=(props)=>{

    let AddressBook = [...props.AddressBook];
  let listItems = AddressBook.map((item)=>
    <ListGroup.Item key={item.id}>
      <Card className="bg-light border rounded">
        <span key={item.key}
          className="text-right"
          onClick={props.closer.bind(null,item.key)}>{'\u274e'}</span>
          <Card.Body className="text-left">
            <h5 >{item.title}</h5>
            <p>{item.description}</p>
          </Card.Body>
        </Card>
    </ListGroup.Item>)
  return listItems;
}
  


export default AddressBook;