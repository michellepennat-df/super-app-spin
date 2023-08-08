import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetch = <T>() => {

    const instance = axios.create({
        baseURL: 'http://localhost:3001/',
        timeout: 5000
    })

    const fetchData = async (url: string): Promise<T | null> => {
        const response = await instance.get(url)
        console.log(response.data)
        return response.data
    }

    return { fetchData }
}

export default useFetch;