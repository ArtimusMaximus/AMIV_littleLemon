import { Link } from "react-router-dom"
import image1 from './assets/lemon_helmet.png';
import image2 from './assets/lemon_helmet_variation.png';


export default () => {
    return (
        <>
            
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 w-full h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-lime-300 ">
                <h1 className="z-10 text-center text-2xl md:text-6xl my-auto text-black font-extrabold italic animate-fade col-start-1 col-end-2 md:col-end-4 row-start-2">
                    This page is under construction!
                </h1>
                <img className="w-36 md:w-72 p-2 row-start-3 mr-auto md:mx-auto md:my-auto rounded-full col-start-1 col-end-2" src={image1} alt="Webpage under construction" />
                <img className="w-36 md:w-72 p-2 row-start-3 col-start-1 md:col-start-3 md:row-start-1 md:row-end-2 ml-auto md:my-auto md:mx-auto rounded-full md:row-span-2 " src={image2} alt="Webpage under construction" />
                
                <div className="m-5 row-start-1 col-start-1 col-end-2 md:col-start-2 mx-auto my-auto">
                <span className="italic text-2xl font-bold">Go To:</span>
                    <Link to={'/'}><p className="underline text-2xl font-bold hover:text-lime-300 my-5">Home</p></Link>
                    <Link to={'/Reservations'}><p className="underline text-2xl font-bold hover:text-lime-300">Reservations</p></Link>
                </div>
            </div>
        </>
    )
}


// flex flex-col items-center justify-center