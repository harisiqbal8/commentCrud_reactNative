import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './Store'

interface ContactForm {
    FirstName: string,
    LastName: string,
    Email: string
}
// Define a type for the slice state
interface CounterState {
    CounterValue: number,
    FirstName: string
}

// Define the initial state using that type
// const initialState: CounterState = {
//     value: 10
// }

export const counterSlice = createSlice({
    name: 'counterslice',
    initialState: {
        CounterValue: 0,
        FirstName: ""
    } as CounterState,
    reducers: {
        increment: (state) => {
            state.CounterValue += 1
        },
        decrement: (state) => {
            state.CounterValue -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.CounterValue += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState) => state.Counter

export default counterSlice.reducer