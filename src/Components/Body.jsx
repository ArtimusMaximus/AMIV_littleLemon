import Specials from "./Specials";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import image1 from '../assets/ll_logo2.png'

const data = [
    {
        img: image1,
        name: 'Da dove viene',
        tag: 'They really know a lot about lemons. True lemon mastery.'
    },
    {
        img: image1,
        name: 'Perchè lo utilizziamo',
        tag: "Whatever you buy, you won't get a lemon."
    },
    {
        img: image1,
        name: 'Dove posso trovarlo',
        tag: 'Will be back for fourths on the fourth of July at four p.m. on my fourty fourth birthday for a party of four.'
    }
]

export default ({ hue }) => {
    return (
        <>
            <div className="bg-black bg-bg-xy">
                <Specials hue={hue} />
                <About />
                <Testimonials hue={hue} data={data} />
            </div>
        </>
    )
}