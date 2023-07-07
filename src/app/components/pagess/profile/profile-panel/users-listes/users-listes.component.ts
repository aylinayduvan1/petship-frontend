import { Component, OnInit } from '@angular/core';
import { Customer } from '../users-listes/type-folder/customer';
import { CustomerServiceUserList } from '../users-listes/customerservice/customerservice';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from "@angular/router";
import { ApiService } from 'src/app/services/api/api.service';
import { User } from 'src/app/models/user.model';
 

@Component({
  selector: 'app-users-listes',
  templateUrl: './users-listes.component.html',
  styleUrls: ['./users-listes.component.css'],
  providers: [MessageService, ConfirmationService, CustomerServiceUserList]
})
export class UsersListesComponent implements OnInit {
  customers!: Customer[];
  users:User[] = []
 

  constructor(
    private readonly apiService: ApiService, 
    private router: Router,
    private customerService: CustomerServiceUserList,
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
    this.customerService.getCustomersMedium().then((data) => {
      this.customers = data;
    });
  }

  calculateCustomerTotal(name: string) {
    let total = 0;

    if (this.customers) {
      for (let customer of this.customers) {
        if (customer.representative?.name === name) {
          total++;
        }
      }
    }

    return total;
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

  deleteCustomer(customer: Customer) {
    this.customers = this.customers.filter((c) => c.id !== customer.id);
    this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kullanıcı başarı ile silindi', life: 3000 });
  }
}