import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const addressBook = (props) => {

    let addressbook = props.addressbook;
    let listContacts = addressbook.map((item) => 
        <Container key = {item.id} >
            <Card className="bg-light border rounded">
                <Card.Body className="text-left">
                    <h1>{item.FirstName} {item.LastName}</h1>
                    <p>Birthday: {item.Birthday}</p>
                    <p>Telephone: {item.Telephone}</p>
                </Card.Body>
            </Card>
        </Container>
    );
    return listContacts;
        
};
export default addressBook;