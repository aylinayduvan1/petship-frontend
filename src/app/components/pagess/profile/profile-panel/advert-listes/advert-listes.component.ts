import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api/api.service';
import {Advert} from 'src/app/models/advert.model'
import { Router } from '@angular/router';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { Category } from 'src/app/models/categories.model';


@Component({
  selector: 'app-advert-listes',
  templateUrl: './advert-listes.component.html',
  styleUrls: ['./advert-listes.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class  AdvertListesComponent implements OnInit{


    productDialog: boolean = false;

    submitted: boolean = false;

    statuses!: any[];

    searchValue: string = '';

    adverts:Advert[]=[];

    modalOpenAdd: boolean = false;
    modalOpen: boolean = false; //sayfa ilk açıldığında modal'ın kapalı kalması için false değer verdik
    modalCreate: boolean = false ;
    modalEdit: boolean = false ;

    openModal() {
      this.modalOpen = true;
    }

    closeModal() {
      this.modalOpen = false;
    }
    openModalAdd() {
      this.modalOpenAdd = true;
    }

    closeModalAdd() {
      this.modalOpenAdd = false;
    }

    createModal(){
          this.modalCreate = false;
    }

    editModal(){
      this.modalEdit = false;
    }

    StatusOptions = [
      { label: 'İlanda', value: true },
      { label: 'İlanda değil', value: false }
    ];

    constructor(

        private readonly apiService: ApiService,
        private router: Router,
        private messageService: MessageService,
        private confirmationService: ConfirmationService) {}

    ngOnInit(): void {
        this.refresh();


        throw new Error('Method not implemented.');
        //service yazarken apiServiceden çek

    }

    refresh() {
        this.apiService.getAllEntities(Advert).subscribe((response) => {
          this.adverts = response.data;
          console.log(this.adverts)
        });
        console.log(this.adverts)

      }


    openNew() {
        this.submitted = false;
        this.productDialog = true;
    }

    onDelete(advertId: number) {
      console.log("Silme işlemi için ID:", advertId);

      this.delete(advertId)
        .then(response => {
          console.log("Silme yanıtı:", response);

          if (response?.status == ResponseStatus.Ok) {
            console.log("Silme işlemi başarılı, tablo yenileniyor.");
            this.refresh();
          } else {
            console.log("Silme işlemi başarısız.");
          }
        })
        .catch(error => {
          console.error("Silme işlemi sırasında bir hata oluştu:", error);
        });
    }


    delete(advertId: number) {
      return this.apiService.deleteEntity(advertId, Advert);
    }


    // hideDialog() {
    //     this.productDialog = false;
    //     this.submitted = false;
    // }



}
