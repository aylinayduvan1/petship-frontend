import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from './service/user.service';
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
  selectedGender: string = '';
  ad: string = '';
  soyad: string = '';
  email: string = '';
  bdate: string = '';
  gsm: string = '';
  gender: string = '';

  constructor() { }

  ngOnInit(): void {

  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  isEditing: boolean = false;

  toggleEditing() {
    this.isEditing = !this.isEditing;
    this.changeContent('edit');

  }

  update() {
    // Güncelleme işlemleri

    console.log('Seçili cinsiyet:', this.selectedGender);
  }
  animalHistoryOptions = [
    { label: 'Hayvan besledim', value: true },
    { label: 'Hayvan beslemedim', value: false }
  ];

  animalExitsOptions = [
    { label: 'Hayvanım var', value: true },
    { label: 'Hayvanım yok', value: false }
  ];

}



