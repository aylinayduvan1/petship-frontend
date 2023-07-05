import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-users-info-listes',
  templateUrl: './users-info-listes.component.html',
  styleUrls: ['./users-info-listes.component.css']
})
export class UsersInfoListesComponent {
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
