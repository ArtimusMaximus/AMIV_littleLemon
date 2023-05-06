import Nav from "./Nav"
import Hero from "./Hero"


export default ({ hue }) => {
    return (
        <>
            <header className="bg-gray-900 grid" style={{backgroundColor: `#${hue['Apple green']}`}}>
                <Nav />
                
                <Hero />
            </header>
        </>
    )
}