import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "entities/User";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>("login/loginByUsername", async ({username, password}, {rejectWithValue}) => {
    try {
        const response = await axios.post("http://localhost:8000/login", {username, password});
        if (!response.data) {
            throw new Error("No data");
        }
        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue('Вы ввели неверный логин или пароль');
    }
});
