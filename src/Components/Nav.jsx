import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"


const navElements2 = [{ text: 'Home', location: 'Home' }, { text: 'Menu', location: 'Menu' }, { text: 'About', location: '#about' }, { text: 'Reservations', location: 'Reservations' }, { text: 'Order Online', location: 'OrderOnline' }]
export default () => {
    
    

    return (
        <>
            <div className="text-yellow-300 italic font-black mx-auto bg-black bg-bg-xy w-full h-fit p-3 sm:p-0 flex flex-wrap items-center justify-center">
                <ul className="flex flex-wrap items-center justify-center sm:flex-row">
                    {navElements2.map((navItem) => {
                        return (
                            <HashLink key={navItem.text} to={`/${navItem.location}`}>
                                <li  className="p-1 m-1 sm:p-4 sm:m-4 hover:rounded-sm hover:bg-lime-300 hover:text-black hover:cursor-pointer">
                                    {navItem.text}
                                </li>
                            </HashLink>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}