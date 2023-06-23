import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LogincComponent } from '../auth/loginc/loginc.component';

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
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
