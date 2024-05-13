import { ApiRoutes } from "../../../../shared/routes";
import Counter from "../../components/Counter";
import { usePost } from "../../utils/axios/axiosClient";


export default function HomePage() {

    const { setRequestData: setRegisterRequestData } = usePost(ApiRoutes.Register)

    return <>
        <h1>Hello from HomePage!</h1>
        <Counter />
        <button onClick={() => { setRegisterRequestData({
            email: "jose@mail.com",
            name: "jose",
            password: "asdf"
        }) }}>
            Clique aqui
        </button>
    </>
}