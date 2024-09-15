export default interface User {
  isLoggedIn: boolean;
  username: string;
  password: string;
  error: string | null;
}
