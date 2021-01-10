import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";
import {Store} from "../../../store/store";

export interface UserDetail {
    userId: string | null,
    token?: string,
    userName?: string,
    userEmail?: string,
    nodeCollectionSize?: number,
    topicCollectionSize?: number,
    specialFollowSize?: number,
}


const initState = localStorage.getItem("user") ? JSON.parse(<string>localStorage.getItem("user")) : {userId: null};

export const userDetailSlice = createSlice<{ user: UserDetail }, SliceCaseReducers<{ user: UserDetail }>, string>({
    name: 'userDetail',
    initialState: {
        user: initState
    },
    reducers: {
        setUser: (state, action: PayloadAction<UserDetail>) => {
            state.user = action.payload
        },

        removeUser: (state, action) => {
            state.user = {
                userId: null,
            };
        }
    }
})

export const {setUser, removeUser} = userDetailSlice.actions

export const selectUser = (state: Store) => {
    return state.userDetail.user
}

export const isLogin = (user: UserDetail) => {
    return user && user.userId;
}
export default userDetailSlice.reducer
