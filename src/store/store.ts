import {configureStore} from "@reduxjs/toolkit";
import userDetailReducer, {UserDetail} from '../components/SparkleNavs/SparkleUserDetailOrLogin/SparkleUserDeatilSlice';

export interface Store {
    userDetail: { user:UserDetail }
}

export default configureStore<Store>({
    reducer: {
        userDetail: userDetailReducer
    }
})
