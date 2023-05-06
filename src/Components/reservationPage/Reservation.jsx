import Nav from "../Nav"
import Footer from "../Footer"
import image from '../../assets/logo_shadow.png'
import { useReducer } from "react"
import { INITIAL_STATE, formReducer } from "../../reducer/form_reducer"
import { ACTION_TYPES } from "../../reducer/action_types"


export default () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

    const handleChange = e => {
        let name = e.target.name
        let value = e.target.value
        dispatch({ type: ACTION_TYPES.INPUT, payload: { name: name, value: value } })
    }

    console.log(state);




    return (
        <>
        <Nav />
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full h-full bg-gradient-to-tl from-lime-300 via-pink-300 to-yellow-300">
                <span className="col-start-1 col-end-4 sm:col-end-2 mx-auto"><img className="w-24 sm:w-52" src={image} alt="" /></span>
                <div className="sm:col-start-2 sm:col-end-3 col-start-1 col-end-4">
                    <h1 className="text-5xl text-center mt-1 italic font-extrabold">Reserve a table!</h1>
                    <form className="flex flex-col items-center justify-between p-5 m-5 mt-1" action="" method="POST">
                        <label htmlFor="date">Date of your visit</label>
                        <input onChange={handleChange} className="p-5 m-5 mt-1 rounded-md" type="date" name='date' />
                        <label htmlFor="date">Number of guests</label>
                        <input onChange={handleChange} className="p-5 m-5 mt-1 rounded-md" type="number" name='guests' />
                        <label htmlFor="date">Occasion</label>
                        <select onChange={handleChange} className="p-5 m-5 mt-1 rounded-md" type="select" name='occasion'>
                            <option value="want_lemons">Want Lemons</option>
                            <option value="bird_day">Birthday</option>
                            <option value="date">First Date</option>
                            <option value="celebrate">Anniversary</option>
                        </select>
                        <label className="text-center" htmlFor="date">Comments? <br />(e.g. `patio seating if available`)</label>
                        <textarea onChange={handleChange} className="p-5 m-5 mt-1 rounded-md" type="text" name='comments' />
                        <button className="p-5 border border-dotted hover:border-solid border-black rounded-lg font-semibold hover:font-bold">Submit</button>
                    </form>
                </div>
            </div>
        <Footer />
        </>
    )
}