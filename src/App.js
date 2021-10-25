import {Component} from 'react'
import './App.css'

const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   return <input 
//             placeholder='Type here' 
//             type='text' />
// }

class Field extends Component {
  render() {
    return <input 
            placeholder='Type here' 
            type='text' />
  }
}

function Btn() {
  const res = () => 'Log in'
  const logged = false

  return <button>{logged ? 'Log out' : res()}</button>
}

function App() {
  return (
    <div className='App'>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}

export default App
