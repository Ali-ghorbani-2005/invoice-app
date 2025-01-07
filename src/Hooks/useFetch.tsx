import { useEffect, useState } from 'react'



const UseFetch = (url:any) => {

    const [data, setData] = useState(null)

    const [isLoding, setIsloding] = useState(false)

    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsloding(true)

            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const json = await response.json()

                setIsloding(false)
                setData(json)
                setError(null)

            } catch (err:any) {
                setIsloding(false)

                setError(err.message)
            }
        }
        fetchData()
    }, [url])


    return { data, isLoding, error }
}

export default UseFetch;