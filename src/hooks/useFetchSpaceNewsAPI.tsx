import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import queryString from 'query-string'
import { API, Option, SpaceNews } from 'src/models'

export default function useFetchSpaceNewsAPI<T>(
    api: API,
    option?: Option
): T | null {
    const [datas, setDatas] = useState<T | null>(null)
    const id = option?.id
    console.log({ option })
    let stringified = ''
    if (option && Object.keys(option).length > 0 && !option?.id) {
        stringified = queryString.stringify(option)
    }
    const urlPath = id
        ? `https://www.spaceflightnewsapi.net/api/v2/${api}/${id}`
        : `https://www.spaceflightnewsapi.net/api/v2/${api}?${stringified}`

    useEffect(() => {
        function getDatas() {
            axios
                .get(urlPath)
                .then((response: AxiosResponse) => {
                    setDatas(response.data)
                    console.log({ response })
                })
                .catch((error: AxiosError) => {
                    console.log({ error })
                    setDatas(null)
                })
        }
        getDatas()
    }, [])

    return datas
}
