import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './Store'


export interface User {
    FirstName: string,
    LastName: string,
    EmailAddress: string,
    Id: number
}
const initialState = {
    UserList: [] as User[]
}

export const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        AddUser: (state, action: PayloadAction<User>) => {
            let users = [...state.UserList]
            action.payload.Id = users.length + 1
            users.push(action.payload)
            state.UserList = users;
        },
        EditUser: (state, action: PayloadAction<User>) => {
            let users = [...state.UserList]
            let object: User = users.filter(x => x.Id == action.payload.Id)[0];
            object.FirstName = action.payload.FirstName;
            object.LastName = action.payload.LastName;
            object.EmailAddress = action.payload.EmailAddress;
            state.UserList = users;
        },
        DeleteUser: (state, action: PayloadAction<number>) => {
            state.UserList = state.UserList.filter(x => x.Id != action.payload)
        }

    }
})
export const { AddUser, EditUser, DeleteUser } = UserSlice.actions;
export const State = (state: RootState) => state.Users;
export default UserSlice.reducer;