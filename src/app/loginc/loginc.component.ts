import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginc',
  templateUrl: '../loginc/loginc.component.html',
  styleUrls: ['../loginc/loginc.component.css']

})
export class LogincComponent {
  username: string="";
  password: string= "";

  constructor(private router: Router) {}

  login() {

    // Giriş doğrulaması yapılacak
    if (this.username === 'aylin' && this.password === '123') {
      console.log("Login function called");

      this.router.navigate(['/homepage']); // Giriş doğruysa /homepage'e yönlendir
    }
  }
}
