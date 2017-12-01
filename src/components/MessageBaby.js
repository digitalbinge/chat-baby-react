import React, { Component } from 'react';
import { Message, Delete } from 'reactbulma';

const MessageBaby = ({ name, message }) => (
  <div className="MessageBaby buffer">
    <Message dark>
      <Message.Header>
        <p>{name}</p>
        <Delete/>
      </Message.Header>
      <Message.Body>
        {message}
      </Message.Body>
    </Message>
  </div>
)


export default MessageBaby;