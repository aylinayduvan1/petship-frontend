import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-loginc',
  templateUrl: '../loginc/loginc.component.html',
  styleUrls: ['../loginc/loginc.component.css'],
  providers: [MessageService]
})
export class LogincComponent {
  username: string = "";
  password: string = "";

  constructor(private router: Router, private messageService: MessageService) {}

  showSuccess() {
    if (this.username === 'aylin' && this.password === '123') {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Giriş yaptınız..' });
    } 
  }

  login() {
    // Giriş doğrulaması yapılacak
    if (this.username === 'aylin' && this.password === '123') {
      setTimeout(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Giriş yaptınız..' });
        this.router.navigate(['/profile']); // Giriş doğruysa /homepage'e yönlendir
      }, 2000); // 2 saniye (2000 milisaniye) beklet
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Kullanıcı adı veya şifre hatalı' });
    }
  }
  
  
  
}
