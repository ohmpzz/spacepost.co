import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import queryString from 'query-string'
import { API, Option } from 'src/models'

export default function useFetchSpaceNewsAPI(api: API, option?: Option) {
    const [datas, setDatas] = useState([])
    const id = option?.id

    let stringified = ''
    if (option && Object.keys(option).length > 0 && !option?.id) {
        stringified = queryString.stringify(option)
    }
    const urlPath = id
        ? `https://www.spaceflightnewsapi.net/api/v2/${api}/${id}`
        : `https://www.spaceflightnewsapi.net/api/v2/${api}?${stringified}`
    console.log({ urlPath })
    useEffect(() => {
        function getDatas() {
            axios
                .get(urlPath)
                .then((response: AxiosResponse) => {
                    setDatas(response.data)
                })
                .catch((error: AxiosError) => {
                    setDatas([])
                })
        }
        getDatas()
    }, [])

    return datas
}
