import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LogincComponent } from '../auth/loginc/loginc.component';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { RadioButtonModule } from 'primeng/radiobutton';

const routes: Routes = [
  {
    path: 'login',
    component: LogincComponent,
  },
];

@NgModule({
  declarations: [LogincComponent],
  imports: [
    FormsModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    RadioButtonModule,
    RouterModule.forChild(routes),

  ],
})
export class AuthModule {}
