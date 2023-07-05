import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerServiceUserList {
    getData() {
        return [
            {
                id: 1470,
                name: 'hayvanadi',
                country: {
                    name: 'Belarus',
                    code: 'by'
                },
                company: 'New York Public Library',
                date: '2017-02-12',
                status: 'qualified',
                verified: true,
                activity: 91,
                representative: {
                    name: 'Safa',
                    image: 'bernardodominic.png'
                },
                balance: 63121
            },
            
            {
                id: 1473,
                name: 'hayvan adi',
                country: {
                    name: 'Turkey',
                    code: 'tr'
                },
                company: 'Irving Foot Center',
                date: '2015-07-22',
                status: 'renewal',
                verified: true,
                activity: 72,
                representative: {
                    name: 'Elif',
                    image: 'asiyajavayant.png'
                },
                balance: 71061
            },
           
            {
                id: 1475,
                name: 'pamuk',
                country: {
                    name: 'Israel',
                    code: 'il'
                },
                company: 'Mcrae, James L',
                date: '2018-03-20',
                status: 'proposal',
                verified: true,
                activity: 45,
                representative: {
                    name: 'Faide',
                    image: 'bernardodominic.png'
                },
                balance: 58495
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
            {
                id: 1477,
                name: 'cici',
                country: {
                    name: 'Latvia',
                    code: 'lv'
                },
                company: 'Kummerer, J Michael Esq',
                date: '2017-02-21',
                status: 'proposal',
                verified: true,
                activity: 12,
                representative: {
                    name: 'çağla',
                    image: 'stephenshaw.png'
                },
                balance: 71454
            },
            
        ];
    }

    constructor(private http: HttpClient) {}
    
    getCustomersMini() {
        return Promise.resolve(this.getData().slice(0, 5));
    }

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    }

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    }

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    }

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    }

    getCustomers(params?: any) {
        return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();
    }
};