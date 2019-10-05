import React, { Component } from 'react'
import './App.css'
import config from './config'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      error: null
    }
  }

  componentDidMount(){
    console.log('hello world')
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=5746545&APPID=${config.OPEN_WEATHER_KEY}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      }).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
        this.setState({
          error
        })
      })
  }

  render() {
    return (
      <main className="App">
        Hackathon 2019
      </main>
    )
  }
}



