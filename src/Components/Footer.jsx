import image from '../assets/logo_trim.png'
import './footer.css'
import { HashLink } from 'react-router-hash-link'


const navElements2 = [{ text: 'Home', location: 'Home' }, { text: 'Menu', location: 'Menu' }, { text: 'About', location: '#about' }, { text: 'Reservations', location: 'Reservations' }, { text: 'Order Online', location: 'OrderOnline' }]

export default ({ hue }) => {
    
    return (
        <>
            <div className="foot flex items-center justify-around h-52 border-8 border-lime-300 bg-black bg-bg-xy text-yellow-300 font-bold" >
                <span className='has-tooltip'>
                    <span className='tooltip w-72 h-16 bg-yellow-300 text-black border-4 border-lime-300 font-bold italic p-2 text-center rounded-xl'>Original page made by AMIV 2023 &#169;</span>
                    <img className='w-12 sm:w-24 animate-bounce' src={image} alt="lemon squeezy logo" />
                </span>
                    <ul>
                        <li>Email</li>
                        <li>Telephone</li>
                    </ul>
                    <ul>
                        {navElements2.map((link) => {
                            return (
                                <HashLink key={link.text} to={`/${link.location}`}><li>{link.text}</li></HashLink>
                            )
                        })}
                    </ul>
                    <ul>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>uberEats</li>
                        <li>DoorDash</li>
                    </ul>
                
            </div>
        </>
    )
}