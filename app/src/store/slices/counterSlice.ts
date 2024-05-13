import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {

    value: number
}

const initialCounterState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                incrementAsync.pending,
                () => {
                    console.log("pending")
                }
            )
            .addCase(
                incrementAsync.fulfilled,
                (state, action: PayloadAction<number>) => {
                    state.value += action.payload
                }
            )
    }
})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return amount
    }
)

export const { increment, decrement, incrementBy } = counterSlice.actions

export default counterSlice.reducer