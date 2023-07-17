import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from "@angular/router";
import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/user.model';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { FilterPipe } from '../users-listes/filter.pipe';


@Component({
  selector: 'app-users-listes',
  templateUrl: './users-listes.component.html',
  styleUrls: ['./users-listes.component.css'],
  providers: [MessageService, ConfirmationService,FilterPipe],

})
export class UsersListesComponent implements OnInit {
  users:User[] = []

  searchName: string=''

  constructor(
    private readonly apiService: ApiService, 
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
    

  refresh() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data;
    });
    console.log(this.users)

  }


  ngOnInit() {
    this.refresh();
    
  }

  onDelete(id: number) {
    this.delete(id).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı başarı ile silindi', life: 3000 });
      }
    });
  }

  delete(id: number) {
    return this.apiService.deleteEntity(id, User);
    
  }


  getSeverity(status: string): any {
    switch (status) {
      case 'unqualified':
        return 'danger';

      case 'qualified':
        return 'success';

      case 'new':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;
    }
  }

     

}