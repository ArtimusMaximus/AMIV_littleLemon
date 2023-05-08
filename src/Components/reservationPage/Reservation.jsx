import Nav from "../Nav";
import Footer from "../Footer";
import image from '../../assets/logo_shadow.png';
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useEffect, useReducer, useState } from "react";
import { INITIAL_STATE, formReducer } from "../../reducer/form_reducer";
import { ACTION_TYPES } from "../../reducer/action_types";
import { useSubmit } from "react-router-dom";


export default () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
    const { loading, response, submit } = useSubmit();
    const [hidden, setHidden] = useState('hidden');
    const [hidden2, setHidden2] = useState('hidden');
    const [borderError, setBorderError] = useState('focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none');
    const [invalidSubmitError, setInvalidSubmitError] = useState(false);
    const [currentInput, setCurrentInput] = useState(null)
    
    const handleChange = e => {
        let name = e.target.name
        let value = e.target.value
        let id = e.target.id
        dispatch({ type: ACTION_TYPES.INPUT, payload: { name: name, value: value } })

        if (name === 'name') {
            if (value.length < 5 && value.length > 2) {
                setHidden('block');
                setBorderError('focus:ring focus:ring-red-400 focus:outline-4 border-red-500 border-4');
            } else if (value.length > 4) {
                 setHidden('hidden'); 
                 setBorderError('focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none');
            }
        } else if (name === 'guests') {
            if (value === 0 || value > 10) {
                setHidden2('block')
                setBorderError('focus:ring focus:ring-red-400 focus:outline-4 border-red-500 border-4');
            } else if (value > 1 && value <= 10) {
                setHidden2('hidden'); 
                setBorderError('focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none');
            }
        }
    }
    console.log(state);

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    const formik = useFormik({
        // initial values
        initialValues: {
            date: new Date().now,
            guests: '',
            occasion: 'want_lemons',
            comments: ''
        },
        onSubmit: values => {
            
        }
        // submit
        // schema validation
    })
    
    

    useEffect(() => {

        window.addEventListener('click', e => {
            console.log(e.target);
            setCurrentInput(e.target)
        })
        
    }, [currentInput])


    return (
        <>
        <Nav />
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full h-full bg-gradient-to-tl from-lime-300 via-pink-300 to-yellow-300">
                <span className="col-start-1 col-end-4 sm:col-end-2 mx-auto"><img className="w-24 sm:w-52" src={image} alt="" /></span>
                <div className="sm:col-start-2 sm:col-end-3 col-start-1 col-end-4">
                    <h1 className="text-5xl text-center mt-1 italic font-extrabold">Reserve a table!</h1>
                    <form className="flex flex-col items-center justify-between p-5 m-5 mt-1" onSubmit={handleSubmit}>
                    <label htmlFor="date">Reservation name</label>
                        <input onChange={handleChange} className={` p-5 m-5 mb-1 mt-1 rounded-md ${currentInput?.name === 'name' ? borderError : 'focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none'}`} type="text" name='name' />
                        <p className={`text-red-500 text-sm italic ${hidden}`}>Must be 5 characters minimum!</p>
                        <label htmlFor="date">Date of your visit</label>
                        <input onChange={handleChange} className="p-5 m-5 mt-1 rounded-md focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none" type="date" name='date' />
                        <label htmlFor="date">Number of guests</label>
                        <input onChange={handleChange} className={`p-5 m-5 mb-1 mt-1 rounded-md ${currentInput?.name === 'guests' ? borderError : 'focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none'}`} type="number" name='guests' />
                        <p className={`text-red-500 text-sm italic ${hidden2}`}>Reservations must be for a minimum of 1 person, and a maximum of 10!</p>
                        <label htmlFor="date">Occasion</label>
                        <select onChange={handleChange} className="p-5 m-5 mt-1 rounded-md" type="select" name='occasion'>
                            <option value="want_lemons">Want Lemons</option>
                            <option value="bird_day">Birthday</option>
                            <option value="date">First Date</option>
                            <option value="celebrate">Anniversary</option>
                        </select>
                        <label className="text-center" htmlFor="date">Comments?</label>
                        <textarea onChange={handleChange} className={`p-5 m-5 mb-1 mt-1 rounded-md focus:ring focus:ring-lime-300 focus:outline-4 focus:outline-none`} type="text" name='comments' placeholder="e.g. `patio seating...`" />
                        <button type='submit' className="p-5 border border-dotted hover:border-solid border-black rounded-lg font-semibold hover:font-bold">Submit</button>
                    </form>
                </div>
            </div>
        <Footer />
        </>
    )


    // return (
    //     <>
    //         <div className="w-full max-w-xs">
    //             <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //                 <div className="mb-4">
    //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
    //                     Username
    //                 </label>
    //                 <input onChange={handleChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight ${borderError} focus:outline-none focus:shadow-outline`} id="username" type="text" placeholder="Username" />
    //                 <p className={ `text-red-500 text-xs italic ${hidden}`}>Must be 5 characters minimum!</p>
    //                 </div>
    //                 <div className="mb-6">
    //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
    //                     Password
    //                 </label>
    //                 <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
    //                 <p className={ `text-red-500 text-xs italic ${hidden}`}>Please choose a password.</p>
    //                 </div>
    //                 <div className="flex items-center justify-between">
    //                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    //                     Sign In
    //                 </button>
    //                 <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
    //                     Forgot Password?
    //                 </a>
    //                 </div>
    //             </form>
    //         <p className="text-center text-gray-500 text-xs">
    //             &copy;2020 Acme Corp. All rights reserved.
    //         </p>
    //         </div>
    //     </>
    // )
    
}