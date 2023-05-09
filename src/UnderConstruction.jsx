import { Link } from "react-router-dom"
import Header from "./Components/Header"
import Nav from "./Components/Nav"


export default () => {
    return (
        <>
            
            <div className="w-screen h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-lime-300 flex flex-col items-center justify-center">
                <h1 className="text-center text-6xl text-black font-extrabold italic animate-fade">
                    This page is under construction!
                </h1>
                
                <div className="m-5">
                <span className="italic text-2xl font-bold">Go To:</span>
                    <Link to={'/'}><p className="underline text-2xl font-bold hover:text-lime-300 my-5">Home</p></Link>
                    <Link to={'/Reservations'}><p className="underline text-2xl font-bold hover:text-lime-300">Reservations</p></Link>
                </div>
            </div>
        </>
    )
}