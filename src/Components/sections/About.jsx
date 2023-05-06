import image1 from '../../assets/turtleneck.webp'
import image2 from '../../assets/couple.webp'


export default () => {
    return (
        <>  
            <div className="bg-white w-full h-fit grid grid-cols-3 border-lime-300 border-4">

            <section className="row-start-1 col-span-full sm:col-start-1 sm:col-end-3">
                <h1 className="text-4xl font-extrabold p-5">About the "Little Lemon"...</h1>
                <p className="p-10 pt-0">Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri. Risale ad un classico della letteratura latina del 45 AC, cosa che lo rende vecchio di 2000 anni. Richard McClintock, professore di latino al Hampden-Sydney College in Virginia, ha ricercato una delle più oscure parole latine, consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i vari testi in cui è citata, la fonte da cui è tratto il testo, le sezioni 1.10.32 and 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone. Questo testo è un trattato su teorie di etica, molto popolare nel Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit amet..", è tratta da un passaggio della sezione 1.10.32.</p>
            </section>
            <section className='flex sm:flex-col flex-row items-center justify-center col-span-full row-start-2 sm:row-start-1 sm:col-start-3'>
                <img className='row-start-2 sm:row-start-1 col-start-1 col-end-4 sm:col-start-3 sm:col-end-4 w-36 mx-auto m-3 p-3 sm:mt-5 sm:mb-1 rounded-full' src={image1} alt="" />
                <hr className=' w-full' />
                <img className='row-start-2 sm:row-start-1 col-start-1 col-end-4 sm:col-start-3 sm:col-end-4 w-36 mx-auto m-3 p-3 sm:mb-5 sm:mt-1 rounded-full' src={image2} alt="" />
            </section>
            </div>
        </>
    )
}