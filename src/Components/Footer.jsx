// style={{backgroundColor: `#${hue['Yellow Green']}`}}
import image from '../assets/logo_trim.png'
import './footer.css'


export default ({ hue }) => {
    return (
        <>
            <div className="foot flex items-center justify-around h-52 border-8 border-lime-300 bg-black text-yellow-300 font-bold" >
                <img className='w-24' src={image} alt="lemon squeezy" />
                    <ul>
                        <li>Email</li>
                        <li>Telephone</li>
                    </ul>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Reserve a Table</li>
                        <li>Menu</li>
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