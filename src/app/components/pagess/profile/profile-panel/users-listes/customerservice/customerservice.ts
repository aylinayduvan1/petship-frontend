import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerServiceUserList {

    getData() {
        return [
            {
                id: 1476,
                name: 'karabaş',
                country: {
                    name: '4646465',
                    code: 'it'
                },
                company: 'burası ieçirk',
                date: '2017-05-13',
                status: 'beklemede',
                verified: true,
                activity: 34,
                representative: {
                    name: 'Aylin',
                    image: 'annafali.png'
                },
                balance: 96252
            },
            {
                id: 1476,
                name: 'karabaş',
                country: {
                    name: '4646465',
                    code: 'it'
                },
                company: 'burası ieçirk',
                date: '2017-05-13',
                status: 'beklemede',
                verified: true,
                activity: 34,
                representative: {
                    name: 'Aylin',
                    image: 'annafali.png'
                },
                balance: 96252
            },


        ];
    }

    constructor(private http: HttpClient) {}

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

    getAdverts (params?: any) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }
};
