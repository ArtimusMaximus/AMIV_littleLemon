import image from '../assets/logo_trim.png'
import './footer.css'
import { HashLink } from 'react-router-hash-link'


const navElements2 = [{ text: 'Home', location: 'Home' }, { text: 'Menu', location: 'Menu' }, { text: 'About', location: '#about' }, { text: 'Reservations', location: 'Reservations' }, { text: 'Order Online', location: 'OrderOnline' }]

export default ({ hue }) => {
    
    return (
        <>
            <div className="foot flex items-center justify-around h-52 border-8 border-lime-300 bg-black bg-bg-xy text-yellow-300 font-bold" >
                <img className='w-24' src={image} alt="lemon squeezy" />
                    <ul>
                        <li>Email</li>
                        <li>Telephone</li>
                    </ul>
                    <ul>
                        {navElements2.map((link) => {
                            return (
                                <HashLink key={link.text} to={link.location}><li>{link.text}</li></HashLink>
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