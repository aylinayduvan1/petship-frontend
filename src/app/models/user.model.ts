export interface User {
  id: number;
  userName: string;
  fullName: string;
  email: string;
  userType: UserType;
}

export enum UserType {
  Admin,
  User,
}
