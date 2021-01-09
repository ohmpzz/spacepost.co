import { useState, useEffect } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import queryString from 'query-string'
import { API, Option } from 'src/models'

export function useFetchSpaceNewsAPI<T>(api: API, option?: Option): T | null {
    const [datas, setDatas] = useState<T | null>(null)
    const id = option?.id

    let stringified = ''
    if (option && Object.keys(option).length > 0 && !option?.id) {
        stringified = queryString.stringify(option)
    }

    useEffect(() => {
        const urlPath = id
            ? `https://www.spaceflightnewsapi.net/api/v2/${api}/${id}`
            : `https://www.spaceflightnewsapi.net/api/v2/${api}?${stringified}`
        function getDatas() {
            axios
                .get(urlPath)
                .then((response: AxiosResponse) => {
                    setDatas(response.data)
                })
                .catch((error: AxiosError) => {
                    setDatas(null)
                })
        }
        getDatas()
    }, [api, id, stringified])

    return datas
}

export default useFetchSpaceNewsAPI
