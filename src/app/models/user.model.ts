import { Advert } from 'src/app/models/advert.model';

export class User {
  id: number =0;
  userName: string = '';
  fullName: string = '';
  email: string = '';
  userType: UserType = 0;
  adverts: Advert[]=[] // Kullanıcının ilanları
  expanded: boolean = false;
}

export enum UserType {
  Admin,
  User,
}


