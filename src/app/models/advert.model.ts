// import { Category } from 'src/app/models/categories.model';

export class Advert {
    //tablodaki veriler
    id : number = 0;
    advert_no : number = 0;
    advert_date : string = '';
    advert_title : string = ''; 
    situation : boolean = false ;
    advert_text : string = '' ;
    advert_img : string = '' ;
    adverts: Advert[] = []; // Kullanıcının ilanları

    // categories: Category[]=[] // Kullanıcının ilanları

}
