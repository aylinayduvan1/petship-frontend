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

  selectedOption1: string = '';
  selectedOption2: string = '';

  ad: string = '';
  soyad: string = '';
  email: string = '';
  bdate: string = '';
  gsm: string = '';
  gender:string='';

  isEditing: boolean = false;
  toggleEditing() {
    this.isEditing = !this.isEditing;
  }

  update() {
    // Güncelleme işlemleri
  }

  constructor() { }

  ngOnInit(): void {
    // İlk değer atamalarını yapabilirsiniz
    this.ad = 'Örnek Ad';
    this.soyad = 'Örnek Soyad';
    this.email = 'ornek@mail.com';
    this.bdate = '01/01/2000';
    this.gsm = '5555555555';
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
