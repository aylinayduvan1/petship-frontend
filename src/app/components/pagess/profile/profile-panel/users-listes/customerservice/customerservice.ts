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