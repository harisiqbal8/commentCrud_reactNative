import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice'
import ProfileSlice from './ProfilePictureSlice'
import UserSlice from './UserSlice'
import PostSlice from './PostSlice'
import UserDataSlice from './UserDataSlice'

export const store = configureStore({
    reducer: {
        Counter: CounterSlice,
        Profile: ProfileSlice,
        Users: UserSlice,
        Posts: PostSlice,
        DummyUser: UserDataSlice
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch