

export default ({ hue, menu }) => {
    return (
        <>
            <div className="text-black w-72 h-auto grid grid-cols-1 m-5 overflow-hidden rounded-xl hover:duration-300 hover:transform hover:translate-x-1 hover:translate-y-1" style={{backgroundColor: `#${hue['Yellow Green']}`}}>
                <img className='w-72 row-start-1 col-start-1 rounded-e-none' src={menu.img} alt={menu.alt} />
                <div className="row-start-1 col-start-1 p-5 h-fit bg-black bg-opacity-60 border border-dashed border-yellow-300 rounded-xl text-white">{menu.tag}</div>
                <p className='p-5 italic font-bold text-md text-center outline'>{menu.name}</p>
            </div>
        </>
    )
}