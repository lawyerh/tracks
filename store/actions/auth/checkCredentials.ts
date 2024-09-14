import axios from "axios";
import BASE_URL from "../BASE_URL";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface CredentialsBody {
  username: string;
  password: string;
}

export interface CredentialsResponse {
  token?: string;
  status: number;
  message?: string;
}

export const checkCredentials = createAsyncThunk(
  "user/checkCredentials",
  async (
    credentials: CredentialsBody,
    { rejectWithValue }
  ): Promise<CredentialsResponse> => {
    const { username, password } = credentials;
    const response = await axios
      .post(`${BASE_URL}/login`, {
        username,
        password,
      })
      .catch((err) => {
        return err;
      });

    const data: CredentialsResponse = {
      token: response.data ? response.data.token : null,
      status: response.status,
      message: response.message ? response.message : null,
    };
    return data;
  }
);
