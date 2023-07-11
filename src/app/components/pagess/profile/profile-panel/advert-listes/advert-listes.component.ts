import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AdvertService } from 'src/app/components/pagess/profile/profile-panel/advert-listes/service/advert-service';
import { ApiService } from 'src/app/services/api/api.service';
import { Advert } from 'src/app/models/advert.model';
import { Router } from '@angular/router';
import { CustomerServiceUserList } from '../users-listes/customerservice/customerservice';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-advert-listes',
  templateUrl: './advert-listes.component.html',
  styleUrls: ['./advert-listes.component.css'],
  providers: [MessageService, ConfirmationService, CustomerServiceUserList]
})
export class AdvertListesComponent implements OnInit {
  productDialog: boolean = false;
  adverts: Advert[] = [];
  selectedProducts: Advert[] | null = null;
  submitted: boolean = false;
  statuses: any[] = [];
  searchValue: string = '';
  product: Advert = {};

  constructor(
    private advertservice: AdvertService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private apiService: ApiService,
    private router: Router,
    private customerService: CustomerServiceUserList,
    private http: HttpClient
  ) {}

  refresh() {
    this.apiService.getAllEntities(Advert).subscribe((response) => {
      this.adverts = response.data;
      console.log(this.adverts); // API isteği tamamlandıktan sonra çalışacak
    });
  }

  ngOnInit() {
    this.refresh();
    this.advertservice.getAdvertsMedium().subscribe((data: Advert[]) => {
      this.adverts = data;
    });
  }

  delete(id: number) {
    return this.apiService.deleteEntity(id, 'Adverts');
  }

  onDelete(id: number) {
    this.delete(id).then(response => {
      if (response?.status === 'Ok') {
        this.refresh();
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı başarı ile silindi', life: 3000 });
      }
    });
  }

  calculateCustomerTotal(advert_title: string) {
    let total = 0;

    if (this.adverts) {
      for (let advert of this.adverts) {
        if (advert.representative?.name === advert_title) {
          total++;
        }
      }
    }
  }

  deleteAdvert(advert: Advert) {
    this.adverts = this.adverts.filter((c) => c.id !== advert.id);
    this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı başarı ile silindi', life: 3000 });
  }
}
