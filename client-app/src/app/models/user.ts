export interface User {
  firstName: string;
  lastName: string;
  token: string;
  username: string;
  image?: any;
}

export interface UserFormValues {
  password: string;
  email: string;
  firstName?: string;
  lastName?: string;
  username?: string;
}
