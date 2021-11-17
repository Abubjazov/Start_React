import { useState, memo, PureComponent } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

// function propsCompare(prevProps, nextProps) {
//   return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text
// }

// const Form = memo((props) => {
//   console.log('render')
//   return (
//     <Container>
//       <form className="w-50 border mt-5 p-3 m-auto">
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//           <input value={props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//           <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         </div>
//       </form>
//     </Container>
//   )
// }, propsCompare)

class Form extends PureComponent {
  render() {
    console.log('render')
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
            <input value={this.props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </Container>
    )
  }
}

function App() {
  const [data, setData] = useState({
    mail: "name@example.com",
    text: 'some text'
  });

  return (
    <>
      <Form mail={data.mail} text={data.text} />
      <button
        onClick={() => setData({
          mail: "ame@example.com",
          text: 'some text'
        })}>
        Click me
      </button>
    </>
  );
}

export default App;




// import { useState } from 'react'
// import { Container } from 'react-bootstrap'
// import './App.css'

// const useInputValidate = (initVal) => {
//   const [value, setValue] = useState(initVal)

//   const onChange = event => {
//     setValue(event.target.value)
//   }

//   const validateInput = (value) => {
//     return value.search(/\d/) >= 0
//   }

//   return { value, onChange, validateInput } // {value: value, onChange: onChange, validateInput: validateInput
// }

// const Form = () => {
//   const input = useInputValidate('')
//   const inputArea = useInputValidate('')

//   const color = input.validateInput(input.value) ? 'text-danger' : null

//   return (
//     <Container>
//       <form className="w-50 border mt-5 p-3 m-auto">
//         <div className="mb-3">
//           <input value={`${input.value} / ${inputArea.value}`} type="text" className="form-control" readOnly />
//           <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//           <input
//             onChange={input.onChange}
//             type="email"
//             value={input.value}
//             className={`form-control ${color}`}
//             id="exampleFormControlInput1"
//             placeholder="name@example.com" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//           <textarea
//             onChange={inputArea.onChange}
//             value={inputArea.value}
//             className="form-control"
//             id="exampleFormControlTextarea1"
//             rows="3"></textarea>
//         </div>
//       </form>
//     </Container>
//   )
// }

// function App() {
//   return (
//     <Form />
//   )
// }

// export default App











// import { useState, useCallback, useEffect, useMemo } from 'react'
// import { Container } from 'react-bootstrap'
// import './App.css'

// const countTotal = (num) => {
//   console.log("counting...")

//   return num + 10
// }

// const Slider = () => {
//   const [slide, setSlide] = useState(0)
//   const [autoplay, setAutoplay] = useState(false)

//   const getSomeImages = useCallback(() => {
//     console.log('fetching')


//     return [
//       "http://s.ekabu.ru/localStorage/post/e7/6a/b7/ab/e76ab7ab_resizedScaled_740to775.jpg",
//       "https://im0-tub-ru.yandex.net/i?id=dc7361b95e9b0527c543cbb558a72055-l&n=27&h=384&w=480"
//     ]
//   }, [])

//   const total = useMemo(() => {
//     countTotal(slide)
//   }, [slide])

//   const style = useMemo(() => ({
//     color: slide > 4 ? 'red' : 'green'
//   }), [slide])

//   useEffect(() => {
//     console.log('style!')
//   }, [style])

//   return (
//     <Container>
//       <div className="slider w-50 m-auto">

//         <Slide getSomeImages={getSomeImages} />

//         <div className="text-center mt-5">Active slide {slide} <br /> {autoplay ? 'auto' : null}</div>
//         <div style={style} className="text-center mt-5">Total slides {total} <br /></div>
//         <div className="buttons mt-3">
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => setSlide(slide => slide - 1)}>-1</button>
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => setSlide(slide => slide + 1)}>+1</button>
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => setAutoplay(autoplay => !autoplay)}>toggle autoplay</button>
//         </div>
//       </div>
//     </Container>
//   )
// }

// const Slide = ({ getSomeImages }) => {
//   const [images, setImages] = useState([])

//   useEffect(() => {
//     setImages(getSomeImages())
//   }, [getSomeImages])

//   return (
//     <>
//       {images.map((url, index) => <img key={index} className="d-block w-100" src={url} alt="slide" />)}
//     </>
//   )
// }


// function App() {
//   return (
//     <>
//       <Slider />
//     </>
//   )
// }

// export default App










// import {useState, useEffect} from 'react'
// import { Badge, Button, ButtonGroup, Container } from 'react-bootstrap'

// import './App.css'

// class ExchangerService {
//   _apiBase = 'https://www.cbr-xml-daily.ru/latest.js'

//   getResource = async (url) => {
//     let res = await fetch(url)

//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status: ${res.status}`)
//     }

//     return await res.json()
//   }

//   getRates = async (cur) => {
//       const res = await this.getResource(`${this._apiBase}`)

//       return res.rates[cur]
//   }
// }

// const loadData = new ExchangerService()

// const Exchanger = () => {
//     const [rate, setRate] = useState(0)

//     const loadCurrency = (cur) => {
//       loadData
//             .getRates(cur)
//             .then(data => setRate(((1 - data) / data).toFixed(4)))
//     }

//     // useEffect(() => {
//     //   console.log('useEffect')
//     //   document.querySelector('h1').innerText = rate
//     // }, [rate])

//     return (
//         <Container>
//           <ButtonGroup size="lg" className="mb-2 mt-3">
//             <Button
//               onClick={() => loadCurrency('USD')}>USD</Button>
//             <Button
//               onClick={() => loadCurrency('EUR')}>EUR</Button>
//             <Button
//               onClick={() => loadCurrency('GBP')}>GBP</Button>
//           </ButtonGroup>
//           <h1>
//             {rate} <Badge bg="secondary">RUB</Badge>
//           </h1>
//         </Container>
//     )
// }


// function App() {
//   return (
//     <>
//       <Exchanger />
//     </>
//   )
// }

// export default App



// import {Component, useState, useEffect} from 'react'
// import {Container} from 'react-bootstrap'
// import './App.css'

// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//       document.title = `Slide: ${this.state.slide}`
//     }

//     componentDidUpdate() {
//       document.title = `Slide: ${this.state.slide}`
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


// const Slider2 = () => {
//     const [slide, setSlide] = useState(0)
//     const [autoplay, setAutoplay] = useState(false)

//     const logger = () => {
//       console.log('Some log string')
//     } 

//     useEffect(() => {
//       console.log('useEffect')
//       document.title = `Slide: ${slide}`

//       window.addEventListener('click', logger)

//       return () => {
//         window.removeEventListener('click', logger)
//       }
//     }, [slide])

//     return (
//         <Container>
//             <div className="slider w-50 m-auto">
//                 <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                 <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
//                 <div className="buttons mt-3">
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={() => setSlide(slide => slide - 1)}>-1</button>
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={() => setSlide(slide => slide + 1)}>+1</button>
//                     <button 
//                         className="btn btn-primary me-2"
//                         onClick={() => setAutoplay(autoplay => !autoplay)}>toggle autoplay</button>
//                 </div>
//             </div>
//         </Container>
//     )
// }


// function App() {
//   const [slider, setSlider] = useState(true)

//   return (
//     <>
//         <Slider/>

//         <button onClick={() => setSlider(!slider)}>Click Meeeeee</button>
//         {slider ? <Slider2/> : null}
//     </>
//   )
// }

// export default App








// import React, {Component} from 'react';
// import ReactDOM  from 'react-dom';
// import {Container} from 'react-bootstrap';
// import './App.css';

// class Form extends Component {
//   state ={
//     advOpen: false
//   }

//   handleClick = () => {
//     this.setState(({advOpen}) => ({
//       advOpen: !advOpen
//     }))
//   }

//   componentDidMount() {
//     setTimeout(this.handleClick, 3000)
//   }

//     render() {
//         return (
//             <Container>
//                 <form onClick={this.handleClick} className="w-50 border mt-5 p-3 m-auto" 
//                 style={{'overflow': 'hidden', 
//                         'position': 'relative'}}>
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//                         <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                     </div>
//                     {
//                       this.state.advOpen ?
//                       <Portal>
//                         <Message />
//                       </Portal> : null
//                     }

//                 </form>
//             </Container>
//         )
//     }
// }

// const Portal = (props) => {
//   const node = document.createElement('div')
//   document.body.appendChild(node)

//   return ReactDOM.createPortal(props.children, node)
// }

// const Message = () => {
//   return (
//     <div 
//       style={{'width': '500px', 
//             'height': '150px', 
//             'backgroundColor': 'red', 
//             'position': 'absolute', 
//             'right': '0', 
//             'bottom': '0'}}>
//         Hello
//     </div>
//   )
// }

// function App() {
//     return (
//         <Form/>
//     );
// }

// export default App;








// import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'
// import './App.css'

// class Form extends Component {
//   // testRef = React.createRef()

//   // componentDidMount() {
//   //   this.testRef.current.focus()
//   // }

//   setInputRef = elem => {
//     this.testRef = elem
//   }

//   focusFirst = () => {
//     if (this.testRef) this.testRef.focus()
//   }

//   render() {
//     return (
//       <Container>
//         <form className="w-50 border mt-5 p-3 m-auto">
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//             <input ref={this.setInputRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//             <textarea onFocus={this.focusFirst} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//           </div>
//         </form>
//       </Container>
//     )
//   }
// }

// function App() {
//   return (
//     <Form />
//   )
// }

// export default App














// import React, { Component } from 'react'
// import styled from 'styled-components'
// import { BootstrapTest } from './BootstrapTest'
// import './App.css'

// const EmpItem = styled.div`
//   padding: 20px;
//   margin-bottom: 15px;
//   border-radius: 5px;
//   box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
// `

// const Header = styled.h2`
//   font-size: 22px
// `

// const Button = styled.button`
//   display: block;
//   padding: 5px 15px;
//   background-color: gold;
//   border: 1px solid rgba(0, 0, 0, .2);
//   box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
// `

// const DynamicGreating = (props) => {
//   return (
//     <div className={'mb-3 p-3 border border-' + props.color}>
//       {/* {props.children} */}
//       {
//         React.Children.map(props.children, child => {
//           return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
//         })
//       }
//     </div>
//   )
// }

// const HelloGreating = () => {
//   return (
//     <div style={{'width': '600px', 'margin': '0 auto'}}>
//       <DynamicGreating color={'primary'}>
//         <h2>Hello world!</h2>
//       </DynamicGreating>
//     </div>
//   )
// }

// const Message = (props) => {
//   return (
//     <h2>The counter: {props.counter}</h2>
//   )
// }

// class Counter extends Component {
//   state = {
//     counter: 0
//   }

//   addCounter = () => {
//     this.setState(({counter}) => ({
//       counter:  counter + 1
//     }))
//   }

//   render() {
//     return (
//       <>
//         <button
//           className={'btn btn-primary'}
//           onClick={this.addCounter}></button>
//           {this.props.render(this.state.counter)}
//       </>
//     )
//   }
// }

// class WhoAmI extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       age: 27,
//       btnText: '+',
//       inputVal: 'input'
//     }

//     // this.addAge = this.addAge.bind(this)
//   }

//   addAge = () => {
//     this.setState(state => ({
//         age: state.age + 1,
//         btnText: '?'
//     }))
//   }

//   commitInputChanges = (e, color) => {
//     console.log(color)
//     this.setState({
//       inputVal: e.target.value
//     })
//   }

//   render() {
//     const {name, surname, link} = this.props
//     const {age, inputVal} = this.state

//     return (
//       <EmpItem>

//         <Counter render={counter => (<Message counter={counter} />)}/>

//         <HelloGreating />

//         <BootstrapTest 
//         left={
//           <DynamicGreating color={'primary'}>
//             <h2>This weel was hard</h2>
//             <h2>Hello world!</h2>
//           </DynamicGreating>
//         }
//         right={
//           <DynamicGreating color={'primary'}>
//             <h2>RIGHT!!!</h2>
//           </DynamicGreating>
//         }
//         />

//         <Header>My name is {name}, surname is {surname}, 
//         age: {age}, IV: {inputVal}</Header>
//         <a href={link} target="_blank" rel="noreferrer">My profile</a>
//         <Button onClick={this.addAge}>{this.state.btnText}</Button>
//         {/* <button onClick={() => this.addAge()}>{this.state.btnText}</button> */}
//         <form>
//           <span>Input</span>
//           <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
//         </form>
//       </EmpItem>
//     )
//   }
// }

// const Wrapper = styled.div`
//   width: 600px;
//   margin: 80px auto 0 auto;
// `

// function App() {
//   return (
//     <Wrapper>
//       <WhoAmI 
//         name="John"
//         surname="Smith"
//         link="https://getbootstrap.com/"/>
//     </Wrapper>
//   )
// }

// export default App
