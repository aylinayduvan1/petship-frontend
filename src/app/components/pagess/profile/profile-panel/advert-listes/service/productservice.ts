import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable()
export class ProductServiceService {
  
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo',
                description: 'Pet Description',
                image: 'bamboo-watch.jpg',
                category: 'Köpek',
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description:  'Pet Description',
                image: 'black-watch.jpg',
                category: 'Kedi',
                rating: 4
            },
    
            
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Galaxy Earrings',
                description:  'Pet Description',
                image: 'galaxy-earrings.jpg',
                category: 'Köpek',
                rating: 5
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Game Controller',
                description:  'Pet Description',
                image: 'game-controller.jpg',
                category: 'Kuş',
                rating: 4
            }, 
        ];
    }

    getProductsWithOrdersData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description:  'Pet Description',
                image: 'bamboo-watch.jpg',
                category: 'Köpek',
                rating: 5,
                orders: [
                    {
                        id: '1000-0',
                        productCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 65,
                        customer: 'David James',
                        status: 'PENDING'
                    },
                    {
                        id: '1000-1',
                        productCode: 'f230fh0g3',
                        date: '2020-05-14',
                        amount: 130,
                        customer: 'Leon Rodrigues',
                        status: 'DELIVERED'
                    },
                    
                ]
            },
           
         
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Game Controller',
                description:  'Pet Description',
                image: 'game-controller.jpg',
                category: 'Kedi',
                rating: 4,
                orders: [
                    {
                        id: '1008-0',
                        productCode: 'vbb124btr',
                        date: '2020-01-05',
                        amount: 99,
                        customer: 'Jeanfrancois David',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1008-1',
                        productCode: 'vbb124btr',
                        date: '2020-01-19',
                        amount: 198,
                        customer: 'Ivar Greenwood',
                        status: 'RETURNED'
                    }
                ]
            },
            
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    }

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
}