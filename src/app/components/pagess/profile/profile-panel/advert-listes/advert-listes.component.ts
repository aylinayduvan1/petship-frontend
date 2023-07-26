import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api/api.service';
import {Advert} from 'src/app/models/advert.model'
import { Router } from '@angular/router';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { AdvertRequest} from 'src/app/models/request/advert-request.model';
import { Category } from 'src/app/models/categories.model';
import { FilterPipe } from '../users-listes/filter.pipe';
import { AnimalRequest } from 'src/app/models/request/animal-request.model';


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

   selectedAdvert: Advert = new Advert();
   selectedAdvertIds: number[] = []; // Seçili ilanların ID'lerini saklayacağımız dizi


    modalOpenAdd: boolean = false;
    modalOpen: boolean = false; //sayfa ilk açıldığında modal'ın kapalı kalması için false değer verdik
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
    editModal(){
      this.modalEdit = false;
    }


    value: string | undefined;

    situationOptions = [
      { label: 'İlanda', value: true },
      { label: 'İlanda değil', value: false }
    ];


    constructor(

        private readonly apiService: ApiService, 
        private router: Router,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private renderer: Renderer2
        ) {}
        public advertRequest: AdvertRequest = <AdvertRequest>{};
        public AnimalRequest: AnimalRequest = <AnimalRequest>{};

    ngOnInit(): void {
        this.refresh();
    }


    //tüm verileri listeleme
    refresh() {
        this.apiService.getAllEntities(Advert).subscribe((response) => {
          this.adverts = response.data;
          console.log(this.adverts)
        });    
      }

   


    //silme
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
    
    



    // ilan ekleme
    onCreate(entity: AdvertRequest) {
      this.addEntity<AdvertRequest>(entity, 'Advert').then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.modalOpenAdd = false;
          this.refresh();
        }
      });
    }
  
    
    // hayvan ekleme
    AnimalonCreate(entity: AnimalRequest) {
      this.addEntity<AnimalRequest>(entity, 'Animal').then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.modalOpenAdd = false;
          this.refresh();
        }
      });
    } 


    addEntity<TEntity>(entity: TEntity, entityType:  string) {
      return this.apiService.addEntity<TEntity>(entity, entityType);
    }




    //güncelleme 
    editDialog: boolean = false
    advertsEdit: Advert | null = null;
  
      
    hideDialog() {
      this.editDialog = false;
    }
  
    closeEditModal() {
      this.editDialog = false;
    }


    
    openEditDialog(id: number) {
      this.apiService.getEntityById<Advert>(id, Advert).then((response) => {
        console.log(response?.data)
        if (response && response.data) {
          this.editDialog = true;
          this.advertsEdit = response.data; 
        } else {
          console.error('İlan bulunamadı veya alınırken bir hata oluştu.');
        }
      }).catch((error) => {
        console.error('İlan alınırken bir hata oluştu:', error);
      });
    }

 

    onUpdate(id: number, updatedAdvert: Advert) {
      this.update(id, updatedAdvert).then(response => {
        if (response?.status == ResponseStatus.Ok) {
          this.refresh();
          this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'ilan güncelleme başarılı', life: 3000 });
          this.hideDialog(); // Güncelleme işlemi tamamlandığında dialogu gizle
        }
      }).catch((error) => {
        console.error('ilan güncellenirken bir hata oluştu:', error);
      });
    }
  
  
    update(id: number, updatedAdvert: Advert) {
      return this.apiService.updateEntity(id, updatedAdvert, Advert);
    }
  
    @ViewChild('modal') modal: ElementRef | undefined;
  showSecondPage = false;

  secondPage: boolean = false; // Şablonunuzda kullanılacak "secondPage" değişkenini ekleyin.

  goToSecondPage() {
    this.showSecondPage = true;
  }

  goToFirstPage() {
    this.showSecondPage = false;
  }

  closeModall() {
    this.showSecondPage = false;
  }

  openModall() {
    if (this.modal) {
      this.renderer.addClass(this.modal.nativeElement, 'show');
    }
}
}
