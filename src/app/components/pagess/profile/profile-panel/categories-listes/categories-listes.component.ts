import { Component } from '@angular/core';
import { Customer, Representative } from '../categories-listes/type-folder/customer';
import { CustomerService } from '../categories-listes/type-service/customer_service';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from "@angular/router";
import { Category } from 'src/app/models/categories.model';


@Component({
  selector: 'app-categories-listes',
  templateUrl: './categories-listes.component.html',
  styleUrls: ['./categories-listes.component.css']
})
export class CategoriesListesComponent {
    customers!: Customer[];

    selectedCustomers!: Customer[];

    representatives!: Representative[];

    

    loading: boolean = true;

    activityValues: number[] = [0, 100];
    
    value: string | null = null;

    statuses: any[] | undefined = undefined;



    categories:Category[] = []



    filter(value: any) {
      // Fonksiyonun içeriği
    }
    
   
    
  
    onChange(event: any) {
      if (event && event.value) {
        const selectedValue = event.value;
        const target = event.target as HTMLInputElement; // veya uygun tür
        // Rest of your code
      }
    }

    
    

    constructor(
    private readonly apiService: ApiService, 
    private router: Router,
    private customerService: CustomerService) {}
    
    refresh() {
      this.apiService.getAllEntities(Category).subscribe((response) => {
        this.categories = response.data;
      });
      console.log(this.categories)
  
    }

    ngOnInit() {
      this.refresh()
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers = customers;
            this.loading = false;

            this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));

            if (this.statuses) {
              // statuses null değilse
              this.statuses.push(/* değerleri ekle */);
            }
            
        });

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
            { name: 'John Doe', image: 'johndoe.jpg' },
            { name: 'Jane Smith', image: 'janesmith.jpg' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' },
            // Component sınıfının içinde tanımlanması gereken örnek veriler

            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
            // Diğer durumlar
        ];

        
    }

    getSeverity(status: string) : any {
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

