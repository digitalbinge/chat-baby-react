import React, { Component } from 'react';
import './App.css';
import MessageForm from './components/MessageForm';
import MessageBaby from './components/MessageBaby';
import { Container, Hero, Title, SubTitle } from 'reactbulma';
import axios from 'axios';

class App extends Component {
  
  state = {
    chatBabies: []
  }

  handlePostBabies = (response) => {
    this.setState(prevState => ({
      chatBabies: [response.data, ...prevState.chatBabies]
    }));
  }

  render() {
    return (
      <Container fluid className="App">
        <Hero dark>
          <Hero.Body>
            <Container>
              <Title>
                Chat Baby 💋
              </Title>
              <SubTitle>
                Message Me Below
              </SubTitle>
            </Container>
          </Hero.Body>
        </Hero>
        <MessageForm handlePostBabies={this.handlePostBabies} />
        {this.state.chatBabies.map(baby => <MessageBaby name={baby.name} message={baby.message} />)}
      </Container>
    );
  }

  componentDidMount() {
    console.log('asdf')
    axios.get('/api/chatbaby')
      .then((response) => {
        this.setState({
          chatBabies: response.data
        })
        console.table(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default App;
