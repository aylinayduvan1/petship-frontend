
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { AvatarModule } from 'primeng/avatar';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/pagess/homee/homepage.component';
import { RouterModule } from '@angular/router'; // RouterModule'yu import edin
import {AboutComponent} from './components/about/about.component';
import { ToastComponent } from './toast/toast.component'
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './components/pagess/profile/profile.module';
import { DialogModule } from 'primeng/dialog';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileComponent } from './components/pagess/profile/profile.component';
import { UsersInfoListesComponent } from './components/pagess/profile/profile-panel/users-info-listes/users-info-listes.component';
import { UsersListesComponent } from './components/pagess/profile/profile-panel/users-listes/users-listes.component';
import { CategoriesListesComponent } from './components/pagess/profile/profile-panel/categories-listes/categories-listes.component';
import { AdvertListesComponent } from './components/pagess/profile/profile-panel/advert-listes/advert-listes.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';



import { TableModule } from 'primeng/table';
import {TagModule} from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { CustomerService } from './components/pagess/profile/profile-panel/categories-listes/type-service/customer_service';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  



  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CategoriesComponent,
    HomepageComponent,
    AboutComponent,
    ToastComponent,
    FooterComponent,
    ProfileComponent,
    UsersInfoListesComponent,
    UsersListesComponent,
    CategoriesListesComponent,
    AdvertListesComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    AvatarModule,
    AppRoutingModule,
    RouterModule,
    ToastModule,
    CommonModule,
     ProfileModule,
     DialogModule,

     TableModule,
     TagModule,
     ProgressBarModule,
     SliderModule,
     MultiSelectModule,
     DropdownModule,
     AccordionModule,
    ButtonModule

  ],
  providers: [AuthService,
    CustomerService,
  MessageService,
  AuthModule],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
