import { useState, useEffect } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import queryString from 'query-string'
import { API, Option, SpaceNews } from 'src/models'
import useDeepCompareEffect from 'use-deep-compare-effect'
import urljoin from 'url-join'

export function useFetchSpaceNewsAPI(api: API) {
    const BASE_URL = `https://www.spaceflightnewsapi.net/api/v2`
    function GetAll(option?: Option) {
        const [news, setNews] = useState<SpaceNews[]>([])
        const [latest, setLatest] = useState<SpaceNews[]>([])
        const [loading, setloading] = useState(true)
        useDeepCompareEffect(() => {
            setloading(true)
            let stringified = ''
            if (option && Object.keys(option).length > 0) {
                stringified = queryString.stringify(option)
            }

            const URL = urljoin(BASE_URL, api, `?${stringified}`)

            axios
                .get(URL)
                .then((res: AxiosResponse) => {
                    setloading(false)
                    setNews(res.data)
                    setLatest(res.data)
                })
                .catch((err: AxiosError) => {
                    setloading(false)
                    setNews([])
                    setLatest([])
                })
        }, [option])
        return { news, loading, latest }
    }

    function GetById(id: string) {
        const [news, setNews] = useState<SpaceNews | null>(null)
        const [loading, setloading] = useState<boolean>(true)
        useEffect(() => {
            const URL = urljoin(BASE_URL, api, id)
            axios
                .get(URL)
                .then((res: AxiosResponse) => {
                    setloading(false)
                    setNews(res.data)
                })
                .catch((err: AxiosError) => {
                    setloading(false)
                    console.log({ err })
                })
        }, [id])
        return { news, loading }
    }

    return {
        GetAll,
        GetById,
    }
}

export default useFetchSpaceNewsAPI
