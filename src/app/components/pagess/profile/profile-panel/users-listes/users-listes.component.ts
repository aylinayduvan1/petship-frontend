import { Component, OnInit } from '@angular/core';
import { Customer } from '../users-listes/type-folder/customer';
import { CustomerServiceUserList } from '../users-listes/customerservice/customerservice';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-users-listes',
  templateUrl: './users-listes.component.html',
  styleUrls: ['./users-listes.component.css'],
  providers: [MessageService, ConfirmationService, CustomerServiceUserList]
})
export class UsersListesComponent implements OnInit {
  customers!: Customer[];

  constructor(
    private customerService: CustomerServiceUserList,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
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
