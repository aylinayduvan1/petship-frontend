import { Advert } from 'src/app/models/advert.model';

export class User {
  id: number =0;
  email: string ='';
  user_surname: string ='';
  Password: string ='';
  userName: string='';
  user_bdate:string ='';
  user_adress:string =''
  user_sex :string ='';
  user_gsm :string ='';
  animal_history: boolean = false;
  animal_exist: boolean = false;
  userType: UserType = 0;
  adverts: Advert[]=[] // Kullanıcının ilanları
}

export enum UserType {
  Admin,
  User,
}


