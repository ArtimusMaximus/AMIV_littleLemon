import Nav from './Components/Nav'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Header from './Components/Header'
import colorScheme from './assets/colorscheme.js';


function App() {
  console.log(colorScheme);

  return (
    <>
      <div className="w-full h-full bg-gray-400 font-extralight">
        <div className="grid w-fit">
          <Header hue={colorScheme} />
          <Body hue={colorScheme} />
          <Footer hue={colorScheme} />
        </div>
      </div>
    </>
  )
}

export default App
