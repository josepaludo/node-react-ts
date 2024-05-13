import axios from "axios";
import { ApiRoutes, ApiResponse, ApiRequest } from "../../../../shared/routes"
import { API_URL } from "../constants";
import { useEffect, useState } from "react";


const axiosClient = axios.create({
    baseURL: API_URL
})

type Methods = "post"|"get"|"put"|"patch"|"delete"

const axiosRequests = {
    get: <Route extends ApiRoutes>(url: Route, params?: ApiRequest[Route]) => {
        return axiosClient.get<ApiResponse[Route]>(url, { params })
    },
    delete: <Route extends ApiRoutes>(url: Route, params?: ApiRequest[Route]) => {
        return axiosClient.delete<ApiResponse[Route]>(url, { params })
    },
    post: <Route extends ApiRoutes>(url: Route, params?: ApiRequest[Route]) => {
        return axiosClient.post<ApiResponse[Route]>(url, params)
    },
    put: <Route extends ApiRoutes>(url: Route, params?: ApiRequest[Route]) => {
        return axiosClient.put<ApiResponse[Route]>(url, params)
    },
    patch: <Route extends ApiRoutes>(url: Route, params?: ApiRequest[Route]) => {
        return axiosClient.patch<ApiResponse[Route]>(url, params)
    },
}

function useAxios<Route extends ApiRoutes>(
    method: Methods, url: Route, params?: ApiRequest[Route]
) {

    type stateType = {
        data?: ApiResponse[Route],
        error?: { message: string, status: number }
    }

    const [ data, setData ] = useState<stateType>({})
    const [ requestData, setRequestData ] = useState<ApiRequest[Route]|undefined>(params)

    useEffect(() => {

        if (!requestData) {
            return
        }

        axiosRequests[method]<Route>(url, requestData)
            .then(res => {
                setData({
                    data: res.data
                })
            })
            .catch(err => {
                setData({
                    error: {
                        message: err.message,
                        status: err.status
                    }
                })
            })
    }, [ requestData ])

    return {
        error: data.error,
        data: data.data,
        setRequestData: setRequestData
    }
}

export function useGet<Route extends ApiRoutes>(url: Route, params?: ApiRequest[Route]) {

    return useAxios("get", url, params)
}

export function usePost<Route extends ApiRoutes>(url: Route, params?: ApiRequest[Route]) {

    return useAxios("post", url, params)
}

export function useDelete<Route extends ApiRoutes>(url: Route, params?: ApiRequest[Route]) {

    return useAxios("delete", url, params)
}

export function usePut<Route extends ApiRoutes>(url: Route, params?: ApiRequest[Route]) {

    return useAxios("put", url, params)
}

export function usePatch<Route extends ApiRoutes>(url: Route, params?: ApiRequest[Route]) {

    return useAxios("patch", url, params)
}
