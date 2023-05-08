

export default ({ hue, data }) => {
    return (
        <>
            <div className="text-black w-52 h-auto grid grid-cols-1 m-5 overflow-hidden hover:duration-300" style={{backgroundColor: `#${hue['Yellow Green']}`}}>
                <img className='w-52 h-52 row-start-1 col-start-1 rounded-full p-2' src={data?.img} alt="" />
                <div className="row-start-1 col-start-1 p-5 bg-black bg-opacity-70 border-2 border-dashed border-white rounded-md text-white font-extralight">
                    <div className="text-center text-4xl leading-4">&#10077;</div>
                    {data.tag}
                    
                </div>
                <div className='p-3 italic font-bold text-md text-center'><span className="font-thin">Individual: </span><br />{data.name}</div>
            </div>
        </>
    )
}