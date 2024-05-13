import { Outlet } from "react-router-dom";
import { useGet } from "../../utils/axios/axiosClient";
import { ApiRoutes } from "../../../../shared/routes";

export default function LayoutPage() {

    const x = useGet(ApiRoutes.Config, {})

    console.log("API PORT: ", x.data?.apiPort, " | API URL: ", x.data?.apiUrl)
    console.log("ERROR: ", x.error)

    return <>
        <Outlet />
    </>
}