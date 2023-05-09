
import Body from './Components/Body'
import Footer from './Components/Footer'
import Header from './Components/Header'
import colorScheme from './assets/colorscheme.js';


function App() {
  return (
    <>
      <div className="scroll-smooth w-full h-full bg-gray-400 font-extralight">
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
