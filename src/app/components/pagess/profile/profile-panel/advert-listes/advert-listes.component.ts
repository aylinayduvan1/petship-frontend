import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-advert-listes',
  templateUrl: './advert-listes.component.html',
  styleUrls: ['./advert-listes.component.css']
})
export class AdvertListesComponent {
  @Output() contentChange: EventEmitter<string> = new EventEmitter<string>();
  currentContent: string = 'home';

  changeContent(content: string) {
    this.currentContent = content;
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
