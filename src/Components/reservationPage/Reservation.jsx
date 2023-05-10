import Nav from "../Nav";
import Footer from "../Footer";
import image from '../../assets/logo_shadow.png';
import image1 from '../../assets/turtleneck.webp'
import image2 from '../../assets/couple.webp'
import { useEffect, useReducer, useState } from "react";
import { INITIAL_STATE, formReducer } from "../../reducer/form_reducer";
import { ACTION_TYPES } from "../../reducer/action_types";
import { useSubmit } from "react-router-dom";



export default () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
    const [hidden, setHidden] = useState('hidden');
    const [hidden2, setHidden2] = useState('hidden');
    const [borderError, setBorderError] = useState('focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none');
    const [currentInput, setCurrentInput] = useState(null);
    
    const delay = t => new Promise(res => setTimeout(res, t));
    
    const handleChange = e => {
        let name = e.target.name
        let value = e.target.value
        let id = e.target.id
        dispatch({ type: ACTION_TYPES.INPUT, payload: { name: name, value: value } });


        if (name === 'name') {
            if (value.length < 5 && value.length > 2) {
                setHidden('block');
                setBorderError('focus:ring focus:ring-red-400 focus:outline-4 border-red-500 border-4');
                dispatch({ type: ACTION_TYPES.SUBMITTABLE, payload: false })
            } else if (value.length > 4) {
                 setHidden('hidden'); 
                 setBorderError('focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none');
                 dispatch({ type: ACTION_TYPES.SUBMITTABLE, payload: true })
            }
        } else if (name === 'guestCount') {
            if (parseInt(value) === 0 || parseInt(value) > 10) {
                setHidden2('block')
                setBorderError('focus:ring focus:ring-red-400 focus:outline-4 border-red-500 border-4');
                dispatch({ type: ACTION_TYPES.SUBMITTABLE, payload: false })
            } else if (parseInt(value) > 1 && parseInt(value) <= 10) {
                setHidden2('hidden'); 
                setBorderError('focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none');
                dispatch({ type: ACTION_TYPES.SUBMITTABLE, payload: true })
            }
        }
    }
    
    const handleSelect = e => {
        dispatch({ type: ACTION_TYPES.DATE, payload: { name: e.target.name, value: e.target.value }})
    }

    const clearFormValues = (e) => {
        document.querySelector('textarea').value = ''
        document.querySelectorAll('input').forEach((i) => {
            // console.log(i);
            i.value = ''
        })
    }
    function disableFormsDuringPost(Boolean) {
        let inputsArr = document.querySelectorAll('input')
        let textArea = document.querySelector('textarea')
        let select = document.querySelector('select')
        const allInputsArr = [...inputsArr, textArea, select];
        if (Boolean) {
            allInputsArr.forEach((i) => {
                i.disabled = Boolean
            })
        } else {
            allInputsArr.forEach((i) => {
                i.disabled = Boolean
            })
        }
    }
    

    const handleSubmit = e => {
        
        e.preventDefault();
        let alertNote = document.getElementById('alertNote')
        let successNote = document.getElementById('successNote')
        console.log('form submitted');
        if (state.proceed) {
            disableFormsDuringPost(true)
            dispatch({ type: ACTION_TYPES.LOADING, payload:  true  })
            
            delay(7000)
                .then(() => dispatch({ type: ACTION_TYPES.SUCCESS }))
                .then(() => clearFormValues(e))
                .then(() => dispatch({ type: ACTION_TYPES.LOADING, payload:  false  }))
            
            
            alertNote.classList.remove('hidden')
            delay(4000)
                .then(() => alertNote.classList.add('hidden'))
                .then(() => successNote.classList.remove('hidden'))
                .then(() => delay(3000).then(() => successNote.classList.add('hidden')))
                .then(() => disableFormsDuringPost(false))
        }
    }

    useEffect(() => {
        let subButton = document.getElementById('subButton');
            let spinner = document.getElementById('spinner')
        if (state.loading) {
            subButton.classList.add('hidden')
            spinner.classList.remove('hidden')
        } else if (!state.loading) {
            spinner.classList.add('hidden')
            subButton.classList.remove('hidden')
        }

    }, [state.loading])
    
    

    useEffect(() => {
        // console.log(state);

        window.addEventListener('click', e => {
            setCurrentInput(e.target)
        })

        if (state.date !== '' && state.time !== '' && state.name !== '' && state.guestCount !== '')  {
            dispatch({ type: ACTION_TYPES.SUBMITTABLE, payload: true })
        } else {
            dispatch({ type: ACTION_TYPES.SUBMITTABLE, payload: false })
        }
    }, [state.proceed, state.date, state.time])


    return (
        <>
        <Nav />
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full h-full bg-gradient-to-tl from-lime-300 via-pink-300 to-yellow-300">
                <span className="col-start-1 col-end-4 sm:col-end-2 mx-auto"><img className="w-24 sm:w-52 hover:duration-200 hover:scale-125" src={image} alt="" /></span>
                <div className="sm:col-start-2 sm:col-end-3 col-start-1 col-end-4">
                    <h1 className="text-5xl text-center mt-1 italic font-extrabold">Reserve a table!</h1>
                    <form className="flex flex-col items-center justify-between p-5 m-5 mt-1" onSubmit={handleSubmit}>
                    <label htmlFor="date">Reservation name</label>
                        <input onChange={handleChange} className={`p-5 m-5 mb-1 mt-1 rounded-md ${currentInput?.name === 'name' ? borderError : 'focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none'}`} type="text" name='name' />
                        <p className={`text-red-500 text-sm italic ${hidden}`}>Must be 5 characters minimum!</p>
                        {/* <ReactDatePicker selected={date} onChange={date => setDate(date)} /> */}
                        <label htmlFor="date">Date of your visit</label>
                        <input onChange={handleChange} onSelect={handleSelect} className="p-5 m-5 mt-1 rounded-md focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none" type="date" name='date' id="date" value={state.date} />
                        <label htmlFor="date">Time</label>
                        <input onChange={handleChange}  className="p-5 m-5 mt-1 rounded-md focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none" type="time" name='time' id="time" value={state.time} />
                        
                        <label htmlFor="date">Number of guests</label>
                        <input onChange={handleChange} className={`p-5 m-5 mb-1 mt-1 rounded-md ${currentInput?.name === 'guestCount' ? borderError : 'focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none'}`} type="number" name='guestCount' value={state.guestCount} />
                        <p className={`text-red-500 text-sm italic ${hidden2}`}>Reservations must be for a minimum of 1 person, and a maximum of 10!</p>
                        <label htmlFor="date">Occasion</label>
                        <select onChange={handleChange} className="p-5 m-5 mt-1 rounded-md" type="select" name='occasion'>
                            <option value="want_lemons">Want Lemons</option>
                            <option value="bird_day">Birthday</option>
                            <option value="date">First Date</option>
                            <option value="celebrate">Anniversary</option>
                        </select>
                        <label className="text-center" htmlFor="comments">Comments?</label>
                        <textarea onChange={handleChange} className={`p-5 m-5 mt-1 rounded-md focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none`} type="text" name='comments' placeholder="e.g. `patio seating...`" />
                            <button id="subButton"  type='submit' className={`${state.proceed ? '' : 'cursor-not-allowed has-tooltip'} p-5 border border-dotted hover:border-solid border-black rounded-lg font-semibold hover:font-bold`}>
                                Submit
                                <span className="tooltip rounded-lg p-3 text-lime-300 bg-black mx-auto">
                                    Please provide reservation 'name', 'date/time' & 'guest count'.
                                </span>
                            </button>
                            <span id="spinner" className="animate-spin text-6xl m-0 font-extrabold text-black hidden p-0">
                                &#10042;
                            </span>
                        
                    </form>
                </div>
                <div id="alertNote" className="bg-gradient-to-br from-yellow-300 via-pink-300 to-lime-300 border-t border-b border-3 border-black text-black px-4 py-3 my-auto mx-auto z-50 hidden shadow-lg animate-fade" role="alert">
                    <p className="font-bold">Please wait while we process your request.</p>
                    <img className='w-36 mx-auto m-3 p-3 sm:mt-2 sm:mb-1 rounded-full hover:grayscale' src={image1} alt="Master Chef" />
                    <span className='hidden sm:block'>Master Chef - Jéan Dog Van Damme</span>
                    <p className="text-sm">We can't wait to have you join us for a splendid meal!</p>
                </div>
                <div id="successNote" className="bg-black bg-bg-xy border-t border-b border-3 border-lime-300 text-lime-300 px-4 py-3 my-auto mx-auto z-50 hidden shadow-lg animate-fade" role="alert">
                    <p className="font-bold text-xl">Success!</p>
                    <img className='w-36 mx-auto m-3 p-3 sm:mb-1 sm:mt-1 rounded-full hover:grayscale' src={image2} alt="investor's photo" />
                    <span className='hidden sm:block'>Entrepreneurs - Sally & Harry</span>
                    <p className="text-sm text-lime-300">Your reservation has been made, save the date!</p>
                </div>
            </div>
        <Footer />
        </>
    )

    
}