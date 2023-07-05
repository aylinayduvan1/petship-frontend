import { Component, OnInit } from '@angular/core';
import { Customer } from '../users-listes/type-folder/customer';
import { CustomerService } from '../users-listes/customerservice/customerservice'; 
@Component({
  selector: 'app-users-listes',
  templateUrl: './users-listes.component.html',
  styleUrls: ['./users-listes.component.css']
})
export class UsersListesComponent {
  customers!: Customer[];

  constructor(private customerService: CustomerService) {}

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

  getSeverity(status: string):any {
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
