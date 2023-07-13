import { Component } from '@angular/core';
import { Customer, Representative } from '../categories-listes/type-folder/customer';
import { CustomerService } from '../categories-listes/type-service/customer_service';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from "@angular/router";
import { Category } from 'src/app/models/categories.model';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categories-listes',
  templateUrl: './categories-listes.component.html',
  styleUrls: ['./categories-listes.component.css']
})
export class CategoriesListesComponent {
  
    categories:Category[] = [];
    
    selectedItems: any[] = [];


    representatives!: Representative[];


    activityValues: number[] = [0, 100];
    
    value: string | null = null;

    statuses: any[] | undefined = undefined;
  messageService: any;

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
      return this.apiService.deleteEntity(id, Category);
      
    }
  

    isChecked(event: any, category: any) {
      this.selectedItems = event.checked ? [category] : [];
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

 
    //push

  }

