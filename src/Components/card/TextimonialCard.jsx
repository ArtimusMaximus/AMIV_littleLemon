

export default ({ hue, data }) => {
    return (
        <>
            <div className="text-black w-52 h-auto grid grid-cols-1 m-5 overflow-hidden hover:duration-300" style={{backgroundColor: `#${hue['Yellow Green']}`}}>
                <img className='w-52 h-52 row-start-1 col-start-1 rounded-full p-2' src={data?.img} alt="" />
                <div className="row-start-1 col-start-1 p-5 bg-black bg-opacity-70 border-2 border-dashed border-white rounded-md text-white font-extralight">{data.tag}</div>
                <p className='p-5 italic font-bold text-md text-center'>{data.name}</p>
            </div>
        </>
    )
}