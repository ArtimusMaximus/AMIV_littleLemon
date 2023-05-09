
import logo5 from '../assets/logo_shadow.png'
import organicSeal from '../assets/organicSeal.png'



function Text() {
    const text = 'Il brano standard del Lorem Ipsum usato sin dal sedicesimo secolo è riprodotto qui di seguito per coloro che fossero interessati. Anche le sezioni 1.10.32 e 1.10.33 del "de Finibus Bonorum et Malorum" di Cicerone sono riprodotte nella loro forma originale, accompagnate dalla traduzione inglese del 1914 di H. Rackham.'
    return (
        <>
            <p className='sm:row-start-1 row-start-2 col-start-2 xl:mr-96 col-end-4 col-span-3 p-4 text-black mt-64 sm:mt-0 sm:text-white font-medium'>{text}</p>
        </>
    )
}

function Title() {
    return (
        <>
            <div className='row-start-1 xl:col-start-2 col-start-1 sm:col-start-2 col-end-5 col-span-3 sm:pb-5 mx-auto'>
                <p className='text-5xl lg:text-8xl md:text-7xl text-black font-extrabold pb-5 flex-row hidden sm:flex'>Little Lem
                <span className=''>
                    <img className='sm:w-10 md:w-12 lg:w-16 sm:mt-1 md:mt-3 lg:mt-4 rounded-2xl sm:opacity-100 hover:duration-200 hover:scale-125' src={logo5} alt="" />
                    </span>n
                </p>
                <p className='text-5xl sm:text-8xl text-black font-extrabold pb-5 p-3 block sm:hidden'>Little Lemon</p>
                <p className='italic text-black ml-3 px-5 p-1 border border-black border-dashed rounded-xl w-fit'>Healthy Cuisine<span className='text-xs text-yellow-300'><br />With a twist</span></p>
                <Text />
            </div>
            <div className='col-start-4 col-end-5 row-start-1 my-auto mx-auto hidden xl:block'><img className='w-48' src={organicSeal} alt="" /></div>
        </>
    )
}

export default () => {
    
    return (
        <>
            <div className="text-yellow-100 p-1 sm:p-4 mx-auto grid grid-cols-4 grid-rows-1">
                <div className="col-span-full row-start-1 sm:col-span-1 mx-auto">
                    <img className='w-46 sm:w-64 rounded-2xl sm:opacity-100 mt-5 sm:mt-0 hover:duration-200 hover:scale-125' src={logo5} alt="" />
                </div>
            <Title />
            </div>
        </>
    )
}