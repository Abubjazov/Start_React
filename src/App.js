import './App.css'

function WhoAmI (props) {
  return (
    <div>
      <h1>My name is {props.name}, surname is {props.surname}</h1>
      <a href={props.link} target="_blank" rel="noreferrer">My profile</a>
    </div>
  )
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
