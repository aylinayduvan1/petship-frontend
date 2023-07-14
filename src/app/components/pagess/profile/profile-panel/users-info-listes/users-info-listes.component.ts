import { User } from './../../../../../models/user.model';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
@Component({
  selector: 'app-users-info-listes',
  templateUrl: './users-info-listes.component.html',
  styleUrls: ['./users-info-listes.component.css']
})
export class UsersInfoListesComponent implements OnInit {
  @Output() contentChange: EventEmitter<string> = new EventEmitter<string>();
  currentContent: string = 'home';

  changeContent(content: string) {
    this.currentContent = content;
  }

  selectedOption1: string = '';
  selectedOption2: string = '';
  selectedGender: string = '';
  constructor(private readonly apiService: ApiService, private router: Router) { }

  users: User[] = [];

  ngOnInit() {
    this.refresh();

  }

  refresh() {
    this.apiService.getAllEntities(User).subscribe((response) => {
      this.users = response.data;
      console.log(this.users)
    });
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
