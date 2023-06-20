import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() contentChange: EventEmitter<string> = new EventEmitter<string>();
  currentContent: string = 'home'; // varsayılan içerik "Ana Sayfa"

  changeContent(content: string) {
    this.currentContent = content; // tıklanan bağlantıya göre içeriği değiştir
  }

  

  constructor() { }

  ngOnInit(): void {
    this.currentContent = 'home'; // Örnek olarak 'home' değerini ata (istediğiniz varsayılan içeriği belirleyin)

  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } 

 
}
