import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { decrement, increment, incrementBy, incrementAsync } from "../store/slices/counterSlice"
import { FormEvent } from "react"


const AMOUNT = "amount"

export default function Counter() {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()

    function onSubmit(e: FormEvent) {

        e.preventDefault()

        const form = e.target as HTMLFormElement
        const amount = Number(form[AMOUNT].value)

        if (isNaN(amount)) {
            return
        }

        dispatch(incrementBy(amount))
    }

    function onSubmitAsync(e: FormEvent) {

        e.preventDefault()

        const form = e.target as HTMLFormElement
        const amount = Number(form[AMOUNT].value)

        if (isNaN(amount)) {
            return
        }

        dispatch(incrementAsync(amount))
    }

    return <>
        <h2>
            { count }
        </h2>

        <div>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>

            <button onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </div>

        <form onSubmit={onSubmit}>
            <input name={AMOUNT} />
            <button type="submit">Increment By</button>
        </form>

        <form onSubmit={onSubmitAsync}>
            <input name={AMOUNT} />
            <button type="submit">Increment By Async</button>
        </form>
    </>
}