import { Category } from 'src/app/models/categories.model';

export class User {
  id: number =0;
  userName: string = '';
  fullName: string = '';
  email: string = '';
  userType: UserType = 0;
  category_name : Category [] = []; }

export enum UserType {
  Admin,
  User,
}


