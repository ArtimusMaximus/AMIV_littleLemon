import Specials from "./Specials";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import image1 from '../assets/ll_logo2.png'

const data = [
    {
        img: image1,
        name: 'Da dove viene',
        tag: 'Best food I never ate.'
    },
    {
        img: image1,
        name: 'Perchè lo utilizziamo',
        tag: 'They really know a lot about lemons.'
    },
    {
        img: image1,
        name: 'Dove posso trovarlo',
        tag: 'Will be back for fourths.'
    }
]

export default ({ hue }) => {
    return (
        <>
            <div className="bg-black">
                <Specials hue={hue} />
                <About />
                <Testimonials hue={hue} data={data} />
            </div>
        </>
    )
}