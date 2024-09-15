export interface CredentialsBody {
  username: string;
  password: string;
}

export interface CredentialsResponse {
  token?: string;
  username?: string;
  status: number;
}
