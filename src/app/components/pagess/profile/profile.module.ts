import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './profile-panel/users-listes/filter.pipe';
import { DatePipe } from '@angular/common';



@NgModule({

  declarations: [
    FilterPipe,
  ],
  imports: [CommonModule,DatePipe],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  

})
export class ProfileModule {
  
 }


 