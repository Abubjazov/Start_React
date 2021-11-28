export const inc = () => ({ type: 'INC' })
export const dec = () => ({ type: 'DEC' })

export const rnd = () => {
    const value = Math.floor(Math.random() * 10)

    return { type: 'RND', payload: value }
}

//<--------------------------------------------------------------->

const initState = { value: 0 }

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INC':
            return { ...state, value: state.value + 1 }

        case 'DEC':
            return { ...state, value: state.value - 1 }

        case 'RND':
            return { ...state, value: state.value * action.payload }

        default:
            return state
    }
}

export default reducer

//<--------------------------------------------------------------->

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { dec, inc, rnd } from './actions'

import reducer from './reducer'

const store = createStore(reducer)

const { dispatch, subscribe, getState } = store

const update = () => document.getElementById('counter').textContent = getState().value

subscribe(update)

const incDispatch = () => dispatch(inc())
const decDispatch = () => dispatch(dec())
const rndDispatch = () => dispatch(rnd())

document.getElementById('inc').addEventListener('click', incDispatch)
document.getElementById('dec').addEventListener('click', decDispatch)
document.getElementById('rnd').addEventListener('click', rndDispatch)

ReactDOM.render(
    <React.StrictMode>
        <>

        </>
    </React.StrictMode>,
    document.getElementById('root')
)


// import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
// import * as Yup from 'yup'

// const MyTextInput = ({ label, ...props }) => {
//     const [field, meta] = useField(props)

//     return (
//         <>
//             <label htmlFor={props.name}>{label}</label>
//             <input {...props} {...field} />
//             {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
//         </>
//     )
// }

// const MyCheckbox = ({ children, ...props }) => {
//     const [field, meta] = useField({ ...props, type: 'checkbox' })

//     return (
//         <>
//             <label className="checkbox">
//                 <input type="checkbox" {...props} {...field} />
//                 {children}
//             </label>

//             {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
//         </>
//     )
// }

// const CustomForm = () => {
//     return (
//         <Formik
//             initialValues={{
//                 name: '',
//                 email: '',
//                 amount: 10,
//                 currency: '',
//                 text: '',
//                 terms: false
//             }}
//             validationSchema={
//                 Yup.object({
//                     name: Yup.string()
//                         .min(2, 'Минимум 2 символа')
//                         .required('Обязательное поле'),
//                     email: Yup.string()
//                         .email('Неправильный Е-маил адрес')
//                         .required('Обязательное поле'),
//                     amount: Yup.number()
//                         .min(5, 'Не менее 5')
//                         .required('Обязательное поле'),
//                     currency: Yup.string()
//                         .required('Выберите валюту'),
//                     text: Yup.string()
//                         .min(10, 'Не менее 10 символов'),
//                     terms: Yup.boolean()
//                         .required('Необходимо ваше согласие')
//                         .oneOf([true], 'Необходимо ваше согласие')
//                 })}
//             onSubmit={values => console.log(JSON.stringify(values, null, 2))}
//         >


//             <Form className="form">
//                 <h2>Отправить пожертвование</h2>

//                 <MyTextInput
//                     label="Ваше имя"
//                     id="name"
//                     name="name"
//                     type="text"
//                 />

//                 <MyTextInput
//                     label="Ваша почта"
//                     id="email"
//                     name="email"
//                     type="email"
//                 />

//                 <label htmlFor="amount">Количество</label>
//                 <Field
//                     id="amount"
//                     name="amount"
//                     type="number"
//                 />
//                 <ErrorMessage className="error" name="amount" component="div" />

//                 <label htmlFor="currency">Валюта</label>
//                 <Field
//                     id="currency"
//                     name="currency"
//                     as="select"
//                 >
//                     <option value="">Выберите валюту</option>
//                     <option value="USD">USD</option>
//                     <option value="UAH">UAH</option>
//                     <option value="RUB">RUB</option>
//                 </Field>
//                 <ErrorMessage className="error" name="currency" component="div" />

//                 <label htmlFor="text">Ваше сообщение</label>
//                 <Field
//                     id="text"
//                     name="text"
//                     as="textarea"
//                 />
//                 <ErrorMessage className="error" name="text" component="div" />

//                 <MyCheckbox
//                     name="terms">Вы соглашаетесь с политикой конфиденциальности?</MyCheckbox>

//                 <button type="submit">Отправить</button>
//             </Form>
//         </Formik>
//     )
// }

// export default CustomForm



// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'

// const CustomForm = () => {
//     return (
//         <Formik
//             initialValues={{
//                 name: '',
//                 email: '',
//                 amount: 10,
//                 currency: '',
//                 text: '',
//                 terms: false
//             }}
//             validationSchema={
//                 Yup.object({
//                     name: Yup.string()
//                         .min(2, 'Минимум 2 символа')
//                         .required('Обязательное поле'),
//                     email: Yup.string()
//                         .email('Неправильный Е-маил адрес')
//                         .required('Обязательное поле'),
//                     amount: Yup.number()
//                         .min(5, 'Не менее 5')
//                         .required('Обязательное поле'),
//                     currency: Yup.string()
//                         .required('Выберите валюту'),
//                     text: Yup.string()
//                         .min(10, 'Не менее 10 символов'),
//                     terms: Yup.boolean()
//                         .required('Необходимо ваше согласие')
//                         .oneOf([true], 'Необходимо ваше согласие')
//                 })}
//             onSubmit={values => console.log(JSON.stringify(values, null, 2))}
//         >


//             <Form className="form">
//                 <h2>Отправить пожертвование</h2>
//                 <label htmlFor="name">Ваше имя</label>
//                 <Field
//                     id="name"
//                     name="name"
//                     type="text"
//                 />
//                 <ErrorMessage className="error" name="name" component="div" />

//                 <label htmlFor="email">Ваша почта</label>
//                 <Field
//                     id="email"
//                     name="email"
//                     type="email"
//                 />
//                 <ErrorMessage className="error" name="email" component="div" />

//                 <label htmlFor="amount">Количество</label>
//                 <Field
//                     id="amount"
//                     name="amount"
//                     type="number"
//                 />
//                 <ErrorMessage className="error" name="amount" component="div" />

//                 <label htmlFor="currency">Валюта</label>
//                 <Field
//                     id="currency"
//                     name="currency"
//                     as="select"
//                 >
//                     <option value="">Выберите валюту</option>
//                     <option value="USD">USD</option>
//                     <option value="UAH">UAH</option>
//                     <option value="RUB">RUB</option>
//                 </Field>
//                 <ErrorMessage className="error" name="currency" component="div" />

//                 <label htmlFor="text">Ваше сообщение</label>
//                 <Field
//                     id="text"
//                     name="text"
//                     as="textarea"
//                 />
//                 <ErrorMessage className="error" name="text" component="div" />

//                 <label className="checkbox">
//                     <Field
//                         name="terms"
//                         type="checkbox"
//                     />
//                     Вы соглашаетесь с политикой конфиденциальности?
//                 </label>
//                 <ErrorMessage className="error" name="terms" component="div" />

//                 <button type="submit">Отправить</button>
//             </Form>
//         </Formik>
//     )
// }

// export default CustomForm



// import { useFormik } from 'formik'
// import * as Yup from 'yup'

// const Form = () => {
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             amount: 10,
//             currency: '',
//             text: '',
//             terms: false
//         },
//         validationSchema: Yup.object({
//             name: Yup.string()
//                 .min(2, 'Минимум 2 символа')
//                 .required('Обязательное поле'),
//             email: Yup.string()
//                 .email('Неправильный Е-маил адрес')
//                 .required('Обязательное поле'),
//             amount: Yup.number()
//                 .min(5, 'Не менее 5')
//                 .required('Обязательное поле'),
//             currency: Yup.string()
//                 .required('Выберите валюту'),
//             text: Yup.string()
//                 .min(10, 'Не менее 10 символов'),
//             terms: Yup.boolean()
//                 .required('Необходимо ваше согласие')
//                 .oneOf([true], 'Необходимо ваше согласие')
//         }),
//         onSubmit: values => console.log(JSON.stringify(values, null, 2))
//     })

//     return (
//         <form className="form" onSubmit={formik.handleSubmit}>
//             <h2>Отправить пожертвование</h2>
//             <label htmlFor="name">Ваше имя</label>
//             <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur} />
//             {formik.errors.name && formik.touched.name ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : null}
//             <label htmlFor="email">Ваша почта</label>
//             <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur} />
//             {formik.errors.email && formik.touched.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
//             <label htmlFor="amount">Количество</label>
//             <input
//                 id="amount"
//                 name="amount"
//                 type="number"
//                 value={formik.values.amount}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur} />
//             {formik.errors.amount && formik.touched.amount ? <div style={{ color: 'red' }}>{formik.errors.amount}</div> : null}
//             <label htmlFor="currency">Валюта</label>
//             <select
//                 id="currency"
//                 name="currency"
//                 value={formik.values.currency}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}>
//                 <option value="">Выберите валюту</option>
//                 <option value="USD">USD</option>
//                 <option value="UAH">UAH</option>
//                 <option value="RUB">RUB</option>
//             </select>
//             {formik.errors.currency && formik.touched.currency ? <div style={{ color: 'red' }}>{formik.errors.currency}</div> : null}
//             <label htmlFor="text">Ваше сообщение</label>
//             <textarea
//                 id="text"
//                 name="text"
//                 value={formik.values.text}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur} />
//             {formik.errors.text && formik.touched.text ? <div style={{ color: 'red' }}>{formik.errors.text}</div> : null}
//             <label className="checkbox">
//                 <input
//                     name="terms"
//                     type="checkbox"
//                     value={formik.values.terms}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur} />
//                 Соглашаетесь с политикой конфиденциальности?
//             </label>
//             {formik.errors.terms && formik.touched.terms ? <div style={{ color: 'red' }}>{formik.errors.terms}</div> : null}
//             <button type="submit">Отправить</button>
//         </form>
//     )
// }

// export default Form




// import { useFormik } from 'formik'

// const validate = values => {
//     const errors = {}

//     if (!values.name) {
//         errors.name = 'ОбЬязательное полЬе!'
//     } else if (values.name.length < 2) {
//         errors.name = 'Мунимум 2 симБола'
//     }

//     if (!values.email) {
//         errors.email = 'ОбЬязательное полЬе!'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Неправильный Email адрес'
//     }

//     return errors
// }

// const Form = () => {
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             amount: 10,
//             currency: '',
//             text: '',
//             terms: false
//         },
//         validate,
//         onSubmit: values => console.log(JSON.stringify(values, null, 2))
//     })

//     return (
//         <form className="form" onSubmit={formik.handleSubmit}>
//             <h2>Отправить пожертвование</h2>
//             <label htmlFor="name">Ваше имя</label>
//             <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur} />
//             {formik.errors.name && formik.touched.name ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : null}
//             <label htmlFor="email">Ваша почта</label>
//             <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur} />
//             {formik.errors.email && formik.touched.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
//             <label htmlFor="amount">Количество</label>
//             <input
//                 id="amount"
//                 name="amount"
//                 type="number"
//                 value={formik.values.amount}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur} />
//             <label htmlFor="currency">Валюта</label>
//             <select
//                 id="currency"
//                 name="currency"
//                 value={formik.values.currency}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}>
//                 <option value="">Выберите валюту</option>
//                 <option value="USD">USD</option>
//                 <option value="UAH">UAH</option>
//                 <option value="RUB">RUB</option>
//             </select>
//             <label htmlFor="text">Ваше сообщение</label>
//             <textarea
//                 id="text"
//                 name="text"
//                 value={formik.values.text}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur} />
//             <label className="checkbox">
//                 <input
//                     name="terms"
//                     type="checkbox"
//                     value={formik.values.terms}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur} />
//                 Соглашаетесь с политикой конфиденциальности?
//             </label>
//             <button type="submit">Отправить</button>
//         </form>
//     )
// }

// export default Form






// import { useState } from 'react'
// import { Container } from 'react-bootstrap'
// import { CSSTransition } from 'react-transition-group'
// import './App.css'

// const Modal = (props) => {
//   const duration = 300

//   return (
//     <CSSTransition
//       in={props.show}
//       timeout={duration}
//       onEnter={() => props.setShowButton(false)}
//       onExited={() => props.setShowButton(true)}
//       classNames="modal"
//       mountOnEnter
//       unmountOnExit>
//       <div
//         className="modal mt-5 d-block">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Typical modal window</h5>
//               <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <p>Modal body content</p>
//             </div>
//             <div className="modal-footer">
//               <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
//               <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </CSSTransition>
//   )
// }

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [showButton, setShowButton] = useState(true);

//   return (
//     <Container>
//       <Modal show={showModal} onClose={setShowModal} setShowButton={setShowButton} />
//       {showButton ?
//         <button
//           type="button"
//           className="btn btn-warning mt-5"
//           onClick={() => setShowModal(true)}>Open Modal</button> : null
//       }
//     </Container>
//   );
// }

// export default App;







// import { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// const withSlider = (BaseComponent, getData) => {
//   return (props) => {
//     const [slide, setSlide] = useState(0);
//     const [autoplay, setAutoplay] = useState(false)

//     useEffect(() => {
//       setSlide(getData());
//     }, [])

//     function changeSlide(i) {
//       setSlide(slide => slide + i);
//     }

//     return <BaseComponent
//       {...props}
//       slide={slide}
//       autoplay={autoplay}
//       changeSlide={changeSlide}
//       setAutoplay={setAutoplay} />
//   }
// }

// const getDataFromFirstFetch = () => { return 10 };
// const getDataFromSecondFetch = () => { return 20 };

// const SliderFirst = (props) => {
//   return (
//     <Container>
//       <div className="slider w-50 m-auto">
//         <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//         <div className="text-center mt-5">Active slide {props.slide}</div>
//         <div className="buttons mt-3">
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => props.changeSlide(-1)}>-1</button>
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => props.changeSlide(1)}>+1</button>
//         </div>
//       </div>
//     </Container>
//   )
// }

// const SliderSecond = (props) => {
//   return (
//     <Container>
//       <div className="slider w-50 m-auto">
//         <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//         <div className="text-center mt-5">Active slide {props.slide} <br />{props.autoplay ? 'auto' : null} </div>
//         <div className="buttons mt-3">
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => props.changeSlide(-1)}>-1</button>
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => props.changeSlide(1)}>+1</button>
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => props.setAutoplay(() => !props.autoplay)}>toggle autoplay</button>
//         </div>
//       </div>
//     </Container>
//   )
// }

// const SliderWithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch)
// const SliderWithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch)

// const withLogger = WrappedComponent => props => {
//   useEffect(() => {
//     console.log('first render')
//   }, [])

//   return <WrappedComponent {...props} />
// }

// const Hello = () => {
//   return (
//     <h1>Hello!</h1>
//   )
// }

// const HelloWithLogger = withLogger(Hello)

// function App() {
//   return (
//     <>
//       <HelloWithLogger />
//       <SliderWithFirstFetch />
//       <SliderWithSecondFetch />
//     </>
//   );
// }

// export default App;







// import { useReducer, useState } from 'react';
// import { Container } from 'react-bootstrap';
// import './App.css';

// function reducer(state, action) {
//   switch (action.type) {
//     case 'toggle':
//       return { autoplay: !state.autoplay }

//     case 'slow':
//       return { autoplay: 300 }

//     case 'fast':
//       return { autoplay: 100 }

//     case 'custom':
//       return { autoplay: action.payload }

//     default:
//       throw new Error()
//   }
// }

// function init(initial) {
//   return { autoplay: initial }
// }

// const Slider = ({ initial }) => {
//   const [slide, setSlide] = useState(0);
//   // const [autoplay, setAutoplay] = useState(false);
//   const [autoplay, dispatch] = useReducer(reducer, initial, init);

//   function changeSlide(i) {
//     setSlide(slide => slide + i);
//   }

//   return (
//     <Container>
//       <div className="slider w-50 m-auto">
//         <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//         <div className="text-center mt-5">Active slide {slide} <br />{autoplay.autoplay ? 'auto' : null} </div>
//         <div className="buttons mt-3">
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => changeSlide(-1)}>-1</button>
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => changeSlide(1)}>+1</button>

//           <button
//             className="btn btn-primary me-2"
//             onClick={() => dispatch({ type: 'toggle' })}>toggle autoplay</button>

//           <button
//             className="btn btn-primary me-2"
//             onClick={() => dispatch({ type: 'slow' })}>slow autoplay</button>

//           <button
//             className="btn btn-primary me-2"
//             onClick={() => dispatch({ type: 'fast' })}>fast autoplay</button>

//           <button
//             className="btn btn-primary me-2"
//             onClick={(e) => dispatch({ type: 'custom', payload: +e.target.textContent })}>500</button>
//         </div>
//       </div>
//     </Container>
//   )
// }

// function App() {
//   return (
//     <Slider initial={false} />
//   );
// }

// export default App;











// import { useState, createContext, useContext } from 'react'
// import { Container } from 'react-bootstrap'
// import './App.css'

// const dataContext = createContext({
//   mail: "name@example.com",
//   text: 'some text',
//   forceChangeMail: () => { }
// })

// const { Provider } = dataContext

// const Form = (props) => {
//   console.log('render')

//   return (
//     <Container>
//       <form className="w-50 border mt-5 p-3 m-auto">
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//           <InputComponent />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//           <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         </div>
//       </form>
//     </Container>
//   )
// }

// const InputComponent = () => {
//   const context = useContext(dataContext)

//   return (
//     <input
//       value={context.mail}
//       type="email"
//       className='form-control'
//       id="exampleFormControlInput1"
//       placeholder="name@example.com"
//       onFocus={context.forceChangeMail} />
//   )
// }

// class InputComponent extends Component {
//   static contextType = dataContext

//   render() {
//     return (
//       // <Consumer>
//       //   {
//       //     value => {
//       //       return (
//       //         <input
//       //           value={value.mail}
//       //           type="email"
//       //           className='form-control'
//       //           id="exampleFormControlInput1"
//       //           placeholder="name@example.com" />
//       //       )
//       //     }
//       //   }
//       // </Consumer>
// <input
//   value={this.context.mail}
//   type="email"
//   className='form-control'
//   id="exampleFormControlInput1"
//   placeholder="name@example.com" />
//     )
//   }
// }

// InputComponent.contextType = dataContext

// function App() {
//   const forceChangeMail = () => {
//     setData({ ...data, mail: 'test@mail.ru' })
//   }

//   const [data, setData] = useState({
//     mail: "name@example.com",
//     text: 'some text',
//     forceChangeMail
//   })

//   return (
//     <Provider value={data}>
//       <Form text={data.text} />
//       <button
//         onClick={() => setData({
//           mail: "ame@example.com",
//           text: 'some text 2',
//           forceChangeMail
//         })}>
//         Click me
//       </button>
//     </Provider>
//   )
// }

// export default App







// import { useState, memo, useCallback } from 'react'
// import { Container } from 'react-bootstrap'
// import './App.css'

// // function propsCompare(prevProps, nextProps) {
// //   return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text
// // }

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
// })

// class Form extends Component {

//   shouldComponentUpdate(nextProps) {
//     if (this.props.mail.name === nextProps.mail.name) {
//       return false
//     }

//     return true
//   }

//   render() {
//     console.log('render')
//     return (
//       <Container>
//         <form className="w-50 border mt-5 p-3 m-auto">
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//             <input value={this.props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//             <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//           </div>
//         </form>
//       </Container>
//     )
//   }
// }

// function App() {
//   const [data, setData] = useState({
//     mail: "name@example.com",
//     text: 'some text'
//   })

//   const onLog = useCallback(() => console.log('WOW'), [])

//   return (
//     <>
//       <Form mail={data.mail} text={data.text} onLog={onLog} />
//       <button
//         onClick={() => setData({
//           mail: "ame@example.com",
//           text: 'some text'
//         })}>
//         Click me
//       </button>
//     </>
//   )
// }

// export default App




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
