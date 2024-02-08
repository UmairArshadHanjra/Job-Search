import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = async (endpoint: any, query: any) => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'c762def57emshec08e8b9183d212p1d78b4jsn9a9f10e75a92',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }
    };

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.request(options);
            setData(response.data.data)
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const refresh = () => {
        fetchData()
    }

    return { data, loading, refresh }
};

export default useFetch;