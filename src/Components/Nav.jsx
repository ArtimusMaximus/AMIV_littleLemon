import { Link } from "react-router-dom"


export default () => {
    const navElements = ['Menu', 'About', 'Reservations', 'Order Online']

    return (
        <>
            <div className="text-yellow-300 italic font-black mx-auto bg-black bg-bg-xy w-full h-fit p-3 sm:p-0 flex flex-wrap items-center justify-center">
                <ul className="flex flex-wrap items-center justify-center sm:flex-row">
                    {navElements.map((navItem) => {
                        return (
                            <Link key={navItem} to={`/${navItem}`}>
                                <li  className="p-1 m-1 sm:p-4 sm:m-4 hover:rounded-sm hover:bg-lime-300 hover:text-black hover:cursor-pointer">
                                    {navItem}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}