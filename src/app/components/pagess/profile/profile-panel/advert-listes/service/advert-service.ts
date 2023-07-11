import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advert } from 'src/app/models/advert.model';


@Injectable()
export class AdvertService {

  getData(): Advert[] {
    return [
      {
        id: '1',
        advert_no: 1,
        advert_title: 'karabaş',
        advert_text: {
          name: '4646465',
          code: 'it'
        },
        advert_date: '2017-05-13',
        situation: true,
        representative: {
          name: 'Aylin',
          image: 'annafali.png'
        }
      }
    ];
  }


  //priv bir http'de inşa et
    constructor(private http: HttpClient) {}

    //inşa edilme boyutları
    getAdvertsMini() {

      return Promise.resolve(this.getData().slice(0, 5));
  }

  getAdvertsSmall() {
      return Promise.resolve(this.getData().slice(0, 10));
  }

  getAdvertsMedium() {
      return Promise.resolve(this.getData().slice(0, 50));
  }

  getAdvertsLarge() {
      return Promise.resolve(this.getData().slice(0, 200));
  }

  getAdvertsXLarge() {
      return Promise.resolve(this.getData());
  }

  getAdverts(params?: any) {
      return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
  }
};
