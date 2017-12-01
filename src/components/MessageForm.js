import React, { Component } from 'react';
import { Input, Button } from 'reactbulma';
import axios from 'axios';

class MessageForm extends Component {

	constructor(props) {
		super(props)
		this.state = {
			name: '',
			message: ''
		}
	}

	

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

  postMessage = (event) => {
    // Stop google from submitting the form
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.message.value);

    axios.post('/api/chatbaby', {
    	name: event.target.name.value,
    	message: event.target.message.value
    })
      .then((response) => {
      	this.props.handlePostBabies(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
    	name: '',
    	message: ''
    })
  }

  render() {
    return (
      <div className="Message buffer">
        <form onSubmit={this.postMessage}>
          <Input onChange={this.handleChange} value={this.state.name} id="name" placeholder="name"/> <br /><br />
          <Input onChange={this.handleChange} value={this.state.message} large id="message" placeholder="message"/> <br /><br />
          <Button medium>Submit</Button>
        </form>
      </div>
    );
  }
}

export default MessageForm;