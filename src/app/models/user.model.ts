import { Advert } from 'src/app/models/advert.model';

export class User {
  id: number =0;
  userName: string = '';
  user_surname: string = '';
  email: string = '';
  user_sex: string = '';
  user_bdate: string = '';
  animal_history: boolean =  true;
  animal_exist: boolean = true;
  userType: UserType = 0;
  adverts: Advert[]=[] // Kullanıcının ilanları
}

export enum UserType {
  Admin,
  User,
}


