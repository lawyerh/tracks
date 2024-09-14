export interface CredentialsBody {
    username: string;
    password: string;
  }
  
  export interface CredentialsResponse {
    token?: string;
    status: number;
  }