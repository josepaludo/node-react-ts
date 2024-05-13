import { Link } from "react-router-dom";
import { Routes } from "../../router/Routes";


export default function ErrorPage() {

    return <>
        <h1>404 not found</h1>
        <Link to={Routes.Home}>
            Home Page
        </Link>
    </>
}