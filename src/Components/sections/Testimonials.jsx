import TextimonialCard from "../card/TextimonialCard"



export default ({ hue, data }) => {
    return (
        <>
        <div className="bg-gradient-to-br to-yellow-300 from-lime-300">
            <div className="text-4xl text-center italic">What others have to say...</div>
            <ul className="flex flex-wrap flex-row justify-center">
                {
                    data.map((i) => {
                        return (
                            <li key={i.tag}>
                                <TextimonialCard hue={hue} data={i} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}