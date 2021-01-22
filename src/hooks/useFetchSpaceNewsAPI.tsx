import { useState, useEffect } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import queryString from 'query-string'
import { API, Option, SpaceNews } from 'src/models'
import urljoin from 'url-join'

export function useFetchSpaceNewsAPI(api: API) {
    const BASE_URL = `https://www.spaceflightnewsapi.net/api/v2`
    function GetAll(option?: Option) {
        const [news, setNews] = useState<SpaceNews[]>([])
        useEffect(() => {
            let stringified = ''
            if (option && Object.keys(option).length > 0) {
                stringified = queryString.stringify(option)
            }

            const URL = urljoin(BASE_URL, api, `?${stringified}`)

            axios
                .get(URL)
                .then((res: AxiosResponse) => setNews(res.data))
                .catch((err: AxiosError) => setNews([]))
        }, [option])
        return news
    }

    function GetById(id: string) {
        const [news, setNews] = useState<SpaceNews | null>(null)
        useEffect(() => {
            const URL = urljoin(BASE_URL, api, id)
            axios
                .get(URL)
                .then((res: AxiosResponse) => setNews(res.data))
                .catch((err: AxiosError) => setNews(null))
        }, [id])
        return news
    }

    return {
        GetAll,
        GetById,
    }
}

// // todo ต้อง return ให้ถูกระหว่าง [] หรือ {}
// export function useFetchSpaceNewsAPI<T>(api?: API, option?: Option) {
//     const [datas, setDatas] = useState<T | null>(null)
//     const id = option?.id

//     let stringified = ''
//     if (option && Object.keys(option).length > 0 && !option?.id) {
//         stringified = queryString.stringify(option)
//     }

//     useEffect(() => {
//         const urlPath = id
//             ? `https://www.spaceflightnewsapi.net/api/v2/${api}/${id}`
//             : `https://www.spaceflightnewsapi.net/api/v2/${api}?${stringified}`
//         function getDatas() {
//             axios
//                 .get(urlPath)
//                 .then((response: AxiosResponse) => {
//                     setDatas(response.data)
//                 })
//                 .catch((error: AxiosError) => {
//                     setDatas(null)
//                 })
//         }
//         getDatas()
//     }, [api, id, stringified])

//     return datas
// }

export default useFetchSpaceNewsAPI
