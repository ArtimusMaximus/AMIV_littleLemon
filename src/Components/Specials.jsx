import Card from "./card/Card"
import image1 from '../assets/lemongrass_avocado.png'
import image2 from '../assets/lemon_martini.png'
import image3 from '../assets/tofu_lemongrass.png'

const specials = [
    {
        tag: 'Lemongrass pad thai, tomatoes & cucumbers...',
        name: 'Lemongrass Avocado Goodness',
        img: image1
    },
    {
        tag: 'Wind up or down with a house themed lemondrop...',
        name: 'House Lemondrop Martini',
        img: image2
    },
    {
        tag: 'Tofu and lemongrass dish, healthy & tasty...',
        name: "Tofu grass",
        img: image3
    },
];




export default ({ hue }) => {
    return (
        <>
            <div className="text-black grid w-fit h-fit mx-auto px-0 py-5 sm:p-5">
                <h1 className="text-4xl text-black italic font-black text-center" style={{color: `#${hue['Pear 2']}`}}>Specials</h1>
                <ul className="flex flex-wrap justify-center">
                    {specials.map((item) => (
                        <li key={item.name}>
                            <Card hue={hue} menu={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}