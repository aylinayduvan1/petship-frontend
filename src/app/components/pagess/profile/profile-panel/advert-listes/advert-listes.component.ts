import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api/api.service';
import {Advert} from 'src/app/models/advert.model'
import { Router } from '@angular/router';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { AdvertRequest} from 'src/app/models/request/advert-request.model';


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

    value: string | undefined;

    situationOptions = [
      { label: 'İlanda', value: true },
      { label: 'İlanda değil', value: false }
    ];

    public advertRequest: AdvertRequest = <AdvertRequest>{};

    constructor(

        private readonly apiService: ApiService, 
        private router: Router,
        private messageService: MessageService,
        private confirmationService: ConfirmationService) {}

    ngOnInit(): void {
        this.refresh();
    }

    refresh() {
        this.apiService.getAllEntities(Advert).subscribe((response) => {
          this.adverts = response.data;
          console.log(this.adverts)
        });    
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
    
    
    onCreate(entity: AdvertRequest) {
      this.addEntity<AdvertRequest>(entity, 'Advert').then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.refresh();
        }
      });
    }
  
    addEntity<TEntity>(entity: TEntity, entityType:  string) {
      return this.apiService.addEntity<TEntity>(entity, entityType);
    }



    onUpdate(advertId: number) {
      console.log("ekle işlemi için ID:", advertId);
      
      this.update(advertId)
        .then(response => {
          console.log("ekleme yanıtı:", response);
          
          if (response?.status == ResponseStatus.Ok) {
            console.log("ekleme işlemi başarılı, tablo yenileniyor.");
            this.refresh();
          } else {
            console.log("ekleme işlemi başarısız.");
          }
        })
        .catch(error => {
          console.error("ekleme işlemi sırasında bir hata oluştu:", error);
        }); 
    }
   
 
    update(advertId: number) {
      const newAdvert: Advert = {
        id: advertId,
        advert_no: 0,
        advert_date: '',
        advert_title: '',
        advert_text: '',
        advert_img: '',
        situation: false
      };      return this.apiService.updateEntity(advertId, newAdvert, Advert );
    }
    
      
    
   
    // hideDialog() {
    //     this.productDialog = false;
    //     this.submitted = false;
    // }




    // getSeverity(status: string): string {
    //   switch (status) {
    //     case 'INSTOCK':
    //       return 'success';
    //     case 'LOWSTOCK':
    //       return 'warning';
    //     case 'OUTOFSTOCK':
    //       return 'danger';
    //     default:
    //       return '';
    //     }
    // }


  
}
