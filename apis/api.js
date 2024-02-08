import axios from "axios"
let rapidApiKey = "a14ae08e00msh12057bdd3afb238p12d14ajsn27a42cb4e8e0"
let rapidApiHost = "jsearch.p.rapidapi.com"

export const searchJob = async (query) => {
    let options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': rapidApiHost
        },
        params: { ...query }
    }

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error("error: ", error);
    }
};

export const jobDetails = async (query) => {
    let options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/job-details`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': rapidApiHost
        },
        params: { ...query }
    }

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error("error: ", error);
    }
}