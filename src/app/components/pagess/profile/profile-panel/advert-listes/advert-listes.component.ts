import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from './domain/product';
import { ProductServiceService } from './service/productservice';
import { ApiService } from 'src/app/services/api/api.service';
import {Advert} from 'src/app/models/advert.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-advert-listes',
  templateUrl: './advert-listes.component.html',
  styleUrls: ['./advert-listes.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class  AdvertListesComponent implements OnInit{
    productDialog: boolean = false;

    products!: Product[];

    product!: Product;

    selectedProducts!: Product[] | null;

    submitted: boolean = false;

    statuses!: any[];

    searchValue: string = '';

    adverts:Advert[]=[];

    
    constructor(


        private readonly apiService: ApiService, 
        private router: Router,
        private productService: ProductServiceService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService) {}

    ngOnInit() {
        //service yazarken apiServiceden çek
       this.refresh();
       
    }
    refresh() {
        this.apiService.getAllEntities(Advert).subscribe((response) => {
          this.adverts = response.data;
          console.log(this.adverts)
        });
        console.log(this.adverts)
    
      }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

   
    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
                this.selectedProducts = null;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            }
        });
    }

   /* editProduct(advert: Advert) {
        this.product = { ...advert.product };
        this.productDialog = true;
      }
    */

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter((val) => val.id !== product.id);
                this.product = {};
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
            this.submitted = true;
          
            if (this.product.name?.trim()) {
              if (this.product.id) {
                const index = this.findIndexById(this.product.id);
               // this.adverts[index].product = { ...this.product };
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
              } else {
                this.product.id = this.createId();
                this.product.image = 'product-placeholder.svg';
                const newAdvert: Advert = {
                  id: 0,
                  advert_no: 0,
                  advert_date: '',
                  advert_title: '',
                  situation: true,
                  advert_text: '',
                 // product: { ...this.product }
                };
                this.adverts.push(newAdvert);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
              }
          
              this.productDialog = false;
              this.product = {};
            }
          }
          
    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    getSeverity(status: string): string {
      switch (status) {
        case 'INSTOCK':
          return 'success';
        case 'LOWSTOCK':
          return 'warning';
        case 'OUTOFSTOCK':
          return 'danger';
        default:
          return '';
        }
    }


    onImageUpload(event: any) {
        const uploadedFiles = event.files;
    }
}
