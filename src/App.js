import React, { Component } from 'react'
import styled from 'styled-components'
import { BootstrapTest } from './BootstrapTest'
import './App.css'

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`

const Header = styled.h2`
  font-size: 22px
`

const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, .2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {/* {props.children} */}
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
        })
      }
    </div>
  )
}

class WhoAmI extends Component {
  constructor (props) {
    super(props)
    this.state = {
      age: 27,
      btnText: '+',
      inputVal: 'input'
    }

    // this.addAge = this.addAge.bind(this)
  }

  addAge = () => {
    this.setState(state => ({
        age: state.age + 1,
        btnText: '?'
    }))
  }

  commitInputChanges = (e, color) => {
    console.log(color)
    this.setState({
      inputVal: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props
    const {age, inputVal} = this.state

    return (
      <EmpItem>

        <BootstrapTest 
        left={
          <DynamicGreating color={'primary'}>
            <h2>This weel was hard</h2>
            <h2>Hello world!</h2>
          </DynamicGreating>
        }
        right={
          <DynamicGreating color={'primary'}>
            <h2>RIGHT!!!</h2>
          </DynamicGreating>
        }
        />

        <Header>My name is {name}, surname is {surname}, 
        age: {age}, IV: {inputVal}</Header>
        <a href={link} target="_blank" rel="noreferrer">My profile</a>
        <Button onClick={this.addAge}>{this.state.btnText}</Button>
        {/* <button onClick={() => this.addAge()}>{this.state.btnText}</button> */}
        <form>
          <span>Input</span>
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </EmpItem>
    )
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`

function App() {
  return (
    <Wrapper>
      <WhoAmI 
        name="John"
        surname="Smith"
        link="https://getbootstrap.com/"/>
    </Wrapper>
  )
}

export default App
