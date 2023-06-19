import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincComponent } from './loginc/loginc.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: LogincComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'hakkimizda', component: AboutComponent, pathMatch: 'full' },
  { path: 'profile' , component: ProfileComponent, }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
