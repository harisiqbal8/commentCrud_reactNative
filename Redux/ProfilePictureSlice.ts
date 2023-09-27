import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './Store'


export const ProfileSlice = createSlice({
    name: "profile",
    initialState: {
        imageurl: ""
    },
    reducers: {
        SetImage: (state, action: PayloadAction<string>) => {
            state.imageurl = action.payload
        }
    }
})
export const { SetImage } = ProfileSlice.actions
export const State = (state: RootState) => state.Profile
export default ProfileSlice.reducer