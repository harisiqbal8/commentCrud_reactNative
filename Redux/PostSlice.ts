import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './Store'


export interface Posts {
    userId: number,
    id: number,
    title: string,
    body: string,
    status?: number
}
const initialState = {
    PostList: [] as Posts[]
}

export const PostSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        UpdateList: (state, action: PayloadAction<Posts[]>) => {
            action.payload.map((item, index) => {
                item.status = 1
            })
            state.PostList = action.payload;

        },
        DeletePost: (state, action: PayloadAction<number>) => {
            state.PostList.filter(x => x.id == action.payload)[0].status = 0
        },
        AddPost: (state, action: PayloadAction<Posts>) => {
            let data = [...state.PostList]
            action.payload.id = data.length + 1;
            action.payload.status = 1;
            data.unshift(action.payload)
            state.PostList = data
        },
        EditPost: (state, action: PayloadAction<Posts>) => {
            let data = [...state.PostList]
            let obj = data.filter(x => x.id == action.payload.id)[0];
            obj.body = action.payload.body;
            obj.userId = action.payload.userId;
            obj.title = action.payload.title;
            obj.status = 1;
            state.PostList = data
        }
    }
})
export const { UpdateList, DeletePost, AddPost, EditPost } = PostSlice.actions;
export const State = (state: RootState) => state.Posts;
export default PostSlice.reducer;