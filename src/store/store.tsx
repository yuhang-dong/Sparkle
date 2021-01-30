import {DefaultProps} from "../types/framework";
import React, {useReducer} from "react";
import {User} from "../types/navs/article";


export interface UserDetail {
    _id: string | null,
    token?: string,
    username?: string,
    email?: string,
    nodeCollectionSize?: number,
    topicCollectionSize?: number,
    specialFollowSize?: number,
}


const initState: UserDetail = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : {_id: null};

type UserReducerType = keyof {
    "setUser": string,
    "removeUser": string
}

function userReducer(user: UserDetail, action:{type: UserReducerType, payload: UserDetail} ): UserDetail {
    switch(action.type) {
        case 'setUser': return action.payload;
        case 'removeUser': return {_id: null};
        default: throw new Error();
    }
}
export const AllContext = React.createContext({user: {_id: null} as UserDetail, userDispatch: (() => {} ) as React.Dispatch<{type: UserReducerType, payload: UserDetail}>});
function Provider(props: DefaultProps) {

    const [user, userDispatch] = useReducer(userReducer, initState);

    return <AllContext.Provider value={{user, userDispatch}}>
        {props.children}
        </AllContext.Provider>
}


export default Provider;
