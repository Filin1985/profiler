import type {UserSchema, User} from "./model/types/user";
import {userActions, userReducer} from "./model/slice/userSlice";

export {
    User,
    UserSchema,
    userReducer,
    userActions
};
