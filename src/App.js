import './App.css'
import React, { Component } from 'react'
import axios from 'axios';

export default class App extends Component {
  state = {advice:""};

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response) =>{
      const {advice}=response.data.slip
      
      this.setState({advice})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    const { advice} = this.state
    return (
      <div className='App'>
          <div className='card'>
              <h1 className='heading'>{advice}</h1>
              <button className='btn' onClick={this.fetchAdvice}>
                <span>Next Advice</span>
              </button>
          </div>
      </div>
    )
  }
}



