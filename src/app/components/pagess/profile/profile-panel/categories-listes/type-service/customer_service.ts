import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {
    getData() {
        return [
           
            {
                id: 1497,
                name: 'Köpek',
                country: {
                    name: 'Argentina',
                    code: 'ar'
                },
                company: 'Simonton Howe & Schneider Pc',
                date: '2020-08-10',
                status: 'unqualified',
                verified: true,
                activity: 30,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                },
                balance: 44528
            },
            {
                id: 1498,
                name: 'Kuş',
                country: {
                    name: 'Switzerland',
                    code: 'ch'
                },
                company: 'Warehouse Office & Paper Prod',
                date: '2019-11-07',
                status: 'negotiation',
                verified: false,
                activity: 20,
                representative: {
                    name: 'Onyama Limba',
                    image: 'onyamalimba.png'
                },
                balance: 69613
            },
            {
                id: 1499,
                name: 'Kedi',
                country: {
                    name: 'Argentina',
                    code: 'ar'
                },
                company: 'Affiliated With Travelodge',
                date: '2019-04-23',
                status: 'renewal',
                verified: true,
                activity: 42,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                },
                balance: 88090
            }
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