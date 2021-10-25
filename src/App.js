import './App.css'

const btnText = 'Print'

function App() {
  return (
    <div className='App'>
      <h2 className = 'cls'>Text: {`${new Date()}`}</h2>
      <input type={'text'} />
      <button>{btnText}</button>
    </div>
  )
}

export default App
