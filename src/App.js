import './App.css'

function WhoAmI ({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name()}, surname is {surname}</h1>
      <a href={link} target="_blank" rel="noreferrer">My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {/* <WhoAmI 
        name="John"
        surname="Smith"
        link="https://getbootstrap.com/"/> */}
      <WhoAmI 
        name={() => 'John'}
        surname="Smith"
        link="https://getbootstrap.com/"/>
    </div>
  )
}

export default App
