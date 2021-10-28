import { Component } from 'react'
import './App.css'

class WhoAmI extends Component {
  constructor (props) {
    super(props)
    this.state = {
      age: 27,
      btnText: '+'
    }
  }

  addAge = () => {
    this.setState(state => ({
        age: state.age + 1,
        btnText: '?'
    }))
  }

  render() {
    const {name, surname, link} = this.props

    return (
      <div>
        <h1>My name is {name}, surname is {surname}, age: {this.state.age}</h1>
        <a href={link} target="_blank" rel="noreferrer">My profile</a>
        <button onClick={this.addAge}>{this.state.btnText}</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI 
        name="John"
        surname="Smith"
        link="https://getbootstrap.com/"/>
    </div>
  )
}

export default App
