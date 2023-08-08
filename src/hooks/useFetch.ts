import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetch = <T>() => {

    const instance = axios.create({
        baseURL: 'http://localhost:3001/',
        timeout: 5000
    })

    const fetchData = async (url: string) => {
        try {
            const response = await instance.get(url)
            return response.data as T
        } catch (error) {
            console.log(error)
        }

    }

    return { fetchData }
}

export default useFetch;