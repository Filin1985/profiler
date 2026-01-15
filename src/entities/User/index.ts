import type {UserSchema, User} from "./model/types/user";
import {userActions, userReducer} from "./model/slice/userSlice";
import {getUserAuthData} from "./model/selectors/getUserAuthData";

export {
    User,
    UserSchema,
    userReducer,
    userActions,
    getUserAuthData
};
