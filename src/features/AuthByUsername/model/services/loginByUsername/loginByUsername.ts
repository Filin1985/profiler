import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User, userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>("login/loginByUsername", async ({username, password}, {rejectWithValue, dispatch}) => {
    try {
        const response = await axios.post("http://localhost:8000/login", {username, password});
        if (!response.data) {
            throw new Error("No data");
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue('Вы ввели неверный логин или пароль');
    }
});
