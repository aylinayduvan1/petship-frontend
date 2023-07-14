import { Component, Input} from '@angular/core';
declare let lottie: any;
import { Advert } from 'src/app/models/advert.model';
import { Category } from 'src/app/models/categories.model';
import { Router } from '@angular/router';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import {  MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api/api.service';
 

@Component({
  selector: 'app-homepage',
  templateUrl: '../homee/homepage.component.html',
  styleUrls: ['../homee/homepage.component.css']
})
export class HomepageComponent {
  constructor(

    private readonly apiService: ApiService, 
    private router: Router,
    private messageService: MessageService) {}

  adverts:Advert[]=[];
  categories:Category[] = [];
  selectedCategory: Category | null = null;
  visible: boolean = false;

  
  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }

  ngOnInit(): void {
    this.refresh();
  
  }
  
  
  refresh() {
    this.apiService.getAllEntities(Advert).subscribe((response) => {
      this.adverts = response.data;
      console.log(this.adverts)
    });     
    this.apiService.getAllEntities(Category).subscribe((response) => {
      this.categories = response.data;
    });
    console.log(this.categories)
  }


  @Input() kategoriAdi: string = '';
  seciliKategori: string = 'kedi'; // Başlangıçta seçili kategori 'kedi' olsun
  animationVisible: boolean = false;
  seciliKartIndex: number = -1; // Başlangıçta herhangi bir kart seçili değil


playAnimation(index: number): void {
  this.seciliKartIndex = index;
  this.animationVisible = true;

  const animation = lottie.loadAnimation({
    container: document.getElementById('animationContainer'), // Animasyonun gösterileceği div'in id'si
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'assets/animations/animation.json' // Animasyon dosyasının yolunu buraya girin
  });

  animation.addEventListener('complete', () => {
    this.animationVisible = false;
    this.seciliKartIndex = -1;
  });
}










}


  
