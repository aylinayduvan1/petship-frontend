import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AvatarModule } from 'primeng/avatar';
import { LogincComponent } from './loginc/loginc.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router'; // RouterModule'yu import edin
import {AboutComponent} from './about/about.component';
import { ToastComponent } from './toast/toast.component'
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CategoriesComponent,
    LoginComponent,
    LogincComponent,
    HomepageComponent,
    AboutComponent,
    ToastComponent,
    FooterComponent,
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
     DialogModule
  ],
  providers: [AuthService,
  MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
