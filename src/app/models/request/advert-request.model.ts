import { Animal } from "../animal.model";
import { Category } from "../categories.model";

export class AdvertRequest {
    //tablodaki veriler
    id : number = 0;
    advert_no : number = 0;
    advert_date : string = '';
    advert_title : string = ''; 
    situation : boolean = false ;
    advert_text : string = '' ;
    advert_img : string = '' ;
    animal:  Animal= new Animal;
    categories:  Category= new Category;
 
    category_id: number = 0;
    advert_id: number = 0;
    user_id: number = 0;
    

}
