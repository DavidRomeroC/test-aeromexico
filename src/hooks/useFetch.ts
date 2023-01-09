import { useEffect, useState } from 'react';

export const useFetch = (query: string) => {

    const [data, setData] = useState({
        data: [],
        loading: true,
        error: null,
    })

    useEffect(() => {
        fetch(`http://localhost:4000/${query}`)
            .then(res => res.json())
            .then(data => setData({
                data,
                loading: false,
                error: null
            }))
            .catch(error => setData({
                data: [],
                loading: false,
                error: error
            }))
    }, [])

    return data;
}
