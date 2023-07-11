import { Advert } from 'src/app/models/advert.model';

export class User {
  id: number =0;
  userName: string = '';
  fullName: string = '';
  email: string = '';
  userType: UserType = 0;
  advert_title : Advert [] = []; }

export enum UserType {
  Admin,
  User,
}


