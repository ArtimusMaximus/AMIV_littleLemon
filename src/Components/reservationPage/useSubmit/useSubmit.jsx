import { useState } from "react"


const wait = ms => new Promise((res) => setTimeout(res, ms))

export default useSubmit = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);


    const submit = async (url, data) => {
        setLoading(true);
        let randomNum = Math.random()

        try {
            await wait(2000)
            if (randomNum < 0.5) throw Error('Something went wrong')
            setResponse({
                type: 'success',
                message: `Reservation received ${data.contact}! Thank you very much & see you soon~`
            })
            
        } catch(e) {
            setResponse({
                type: 'error',
                message: 'Your reservation did not go through due to an unexpected error, please try again!'
            })
        } finally {
            setLoading(false)
        }
    }
    return { loading, response, submit }
}