import { User } from './../../../../../models/user.model';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { MessageService } from 'primeng/api';
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
  constructor(
    private readonly apiService: ApiService,
     private router: Router,
     private authService: AuthService,
     private messageService: MessageService,
     ) { 
    this.currentUser = null;
  }

  users: User[] = [];

  currentUser: User | null;
  
  ngOnInit(): void {
    this.refresh();
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
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




  //güncelleme

  userEdit: User | null = null;
  editDialog: boolean = false
  isEditing: boolean = false;

    
  hideDialog() {
    this.editDialog = false;
  }

  closeEditModal() {
    this.editDialog = false;
  }

  openEditDialog(id: number) {
    this.apiService.getEntityById<User>(id, User).then((response) => {
      console.log(response?.data)
      if (response && response.data) {
        this.currentUser = response.data; 
        this.isEditing =true;
        this.changeContent('edit');
      } else {
        console.error('İlan bulunamadı veya alınırken bir hata oluştu.');
      }
    }).catch((error) => {
      console.error('İlan alınırken bir hata oluştu:', error);
    });
  }


  onUpdate(id: number, updatedUser: User) {
    this.update(id, updatedUser).then(response => {
      if (response?.status == ResponseStatus.Ok) {
        this.refresh();
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'ilan güncelleme başarılı', life: 3000 });
        // this.hideDialog(); // Güncelleme işlemi tamamlandığında dialogu gizle
      }
    }).catch((error) => {
      console.error('ilan güncellenirken bir hata oluştu:', error);
    });
  }


  update(id: number, updatedUser: User) {
    return this.apiService.updateEntity(id, updatedUser, User);
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
