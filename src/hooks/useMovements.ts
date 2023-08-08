import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { MovementsResponse, MovementsSection } from "../models/Movements/MovementsResponse";
import { Movements } from "../models/Movements/Movements";


const useMovements = () => {

    const controller = new AbortController()

    const [movements, setMovements] = useState<MovementsSection[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [moreData, setMoreData] = useState(true)

    const { fetchData } = useFetch<MovementsResponse>()

    const getMovements = () => {
        controller.abort()
        setLoading(true)
        setTimeout(() => {
            fetchData(`history/${page}`).then((response) => {
                console.log(response)
                setMovements([...movements, ...response!.data])
                setPage(page + 1)
            }).catch((err) => {
                setMoreData(false)
            }).finally(() => setLoading(false))
        }, 2000)
    }

    useEffect(() => {
        getMovements()

        return controller.abort()
    }, [])

    return { movements, loading, moreData, getMovements };
}

export default useMovements;