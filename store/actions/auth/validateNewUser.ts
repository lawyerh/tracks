import axios from "axios";
import BASE_URL from "../BASE_URL";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CredentialsBody, CredentialsResponse } from "types/Credentials";

export const validateNewUser = createAsyncThunk(
  "user/validateNewUser",
  async (credentials: CredentialsBody): Promise<CredentialsResponse> => {
    // If any validations, do them now
    const { username, password } = credentials;
    const response = await axios
      .post(`${BASE_URL}/signup`, {
        username,
        password,
      })
      .catch((err) => {
        return err;
      });

    const data = {
      token: response.data ? response.data.token : null,
      status: response.status,
    };
    return data as CredentialsResponse;
  }
);
