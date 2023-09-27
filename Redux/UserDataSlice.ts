import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './Store'


export interface UserData {
    id: number,
    name: string,
}
const initialState = {
    UserList: [] as UserData[]
}

export const UserDataSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        UploadData: (state, action: PayloadAction<UserData[]>) => {
            state.UserList = action.payload;
        }
    }
})
export const { UploadData } = UserDataSlice.actions;
export const State = (state: RootState) => state.DummyUser;
export default UserDataSlice.reducer;