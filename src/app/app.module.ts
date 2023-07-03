import { NgModule } from '@angular/core';
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
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RouterModule } from '@angular/router'; // RouterModule'yu import edin
import {AboutComponent} from './components/about/about.component';
import { ToastComponent } from './toast/toast.component'
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './components/profile/profile.module';
import { DialogModule } from 'primeng/dialog';
import { AuthModule } from './modules/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CategoriesComponent,
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
  MessageService,
  AuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
