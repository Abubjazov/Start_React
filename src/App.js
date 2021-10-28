import { Component } from 'react'
import './App.css'

class WhoAmI extends Component {
  constructor (props) {
    super(props)
    this.state = {
      age: 27,
      btnText: '+',
      inputVal: 'input'
    }
    
    this.addAge = this.addAge.bind(this)
  }

  addAge() {
    this.setState(state => ({
        age: state.age + 1,
        btnText: '?'
    }))
  }

  commitInputChanges = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props
    const {age, inputVal} = this.state

    return (
      <div>
        <h1>My name is {name}, surname is {surname}, 
        age: {age}, IV: {inputVal}</h1>
        <a href={link} target="_blank" rel="noreferrer">My profile</a>
        <button onClick={this.addAge}>{this.state.btnText}</button>
        <form>
          <span>Input</span>
          <input type="text" onChange={this.commitInputChanges} />
        </form>
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
