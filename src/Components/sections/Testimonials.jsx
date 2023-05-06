import TextimonialCard from "../card/TextimonialCard"



export default ({ hue, data }) => {
    return (
        <>
        <div className="bg-gradient-to-br to-yellow-300 from-lime-300">
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