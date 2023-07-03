import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: '../navbar/navbar.component.html',
  styleUrls: ['../navbar/navbar.component.css']
})
export class NavbarComponent  {
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}