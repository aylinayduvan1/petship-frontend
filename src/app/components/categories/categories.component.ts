import { Component, Input , ElementRef , ViewChild, OnInit} from '@angular/core';
declare let lottie: any;
import { AnimationItem } from 'lottie-web';
import { Advert } from 'src/app/models/advert.model';
import { Router } from '@angular/router';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import {  MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api/api.service';
 
interface Kedi {
  adi: string;
  yasi: number;
  cinsiyeti: string;
  gorseli: string;
  showButton: boolean; // showButton özelliğini Kopek arayüzüne ekledik

}
interface Kopek {
  adi: string;
  yasi: number;
  cinsiyeti: string;
  gorseli: string;
  showButton: boolean; // showButton özelliğini Kopek arayüzüne ekledik

}
interface Kus {
  adi: string;
  yasi: number;
  cinsiyeti: string;
  gorseli: string;
  showButton: boolean; // showButton özelliğini Kopek arayüzüne ekledik

}

@Component({
    selector: 'app-kategori',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
  })
  
  
export class CategoriesComponent implements OnInit {
    @Input() kategoriAdi: string = '';
    seciliKategori: string = 'kedi'; // Başlangıçta seçili kategori 'kedi' olsun
    animationVisible: boolean = false;
    seciliKartIndex: number = -1; // Başlangıçta herhangi bir kart seçili değil

  constructor(

    private readonly apiService: ApiService, 
    private router: Router,
    private messageService: MessageService) {}


    adverts:Advert[]=[];

    ngOnInit(): void {
      this.initializeAnimation();
      this.refresh();
    
    }
    
    
    refresh() {
      this.apiService.getAllEntities(Advert).subscribe((response) => {
        this.adverts = response.data;
        console.log(this.adverts)
      });     
    }

    

  playAnimation(index: number): void {
    this.seciliKartIndex = index;
    this.animationVisible = true;
  
    const animation = lottie.loadAnimation({
      container: document.getElementById('animationContainer'), // Animasyonun gösterileceği div'in id'si
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/animation.json' // Animasyon dosyasının yolunu buraya girin
    });
  
    animation.addEventListener('complete', () => {
      this.animationVisible = false;
      this.seciliKartIndex = -1;
    });
  }
  



 
  kediKartlar: Kedi[] = [
    { adi: 'Kedi 1', yasi: 2, cinsiyeti: 'Erkek', gorseli: 'kedi-image.png' , showButton: false},
    { adi: 'Kedi 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kedi-image.png' , showButton: false},
    { adi: 'Kedi 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'kedi-image.png' , showButton: false},
    { adi: 'Kedi 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kedi-image.png' , showButton: false},
    { adi: 'Kedi 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kedi-image.png', showButton: false },
    { adi: 'Kedi 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kedi-image.png' , showButton: false},
    { adi: 'Kedi 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kedi-image.png' , showButton: false},
    { adi: 'Kedi 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kedi-image.png' , showButton: false},
    { adi: 'Kedi 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kedi-image.png' , showButton: false},
    { adi: 'Kedi 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kedi-image.png' , showButton: false},
    { adi: 'Kedi 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kedi-image.png' , showButton: false},
    { adi: 'Kedi 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kedi-image.png' , showButton: false},

  ];
  
  kusKartlar: Kus[] = [
    { adi: 'Kus 1', yasi: 2, cinsiyeti: 'Erkek', gorseli: 'kus-image.png', showButton: false},
    { adi: 'Kus 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'kus-image.png' , showButton: false},
    { adi: 'Kus 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'kus-image.png', showButton: false },
    { adi: 'Kus 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'kus-image.png' , showButton: false},
    { adi: 'Kus 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'kus-image.png' , showButton: false},
    { adi: 'Kus 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'kus-image.png', showButton: false },
    { adi: 'Kus 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'kus-image.png', showButton: false },
    { adi: 'Kus 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'kus-image.png', showButton: false },
    { adi: 'Kus 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'kus-image.png', showButton: false },
    { adi: 'Kus 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'kus-image.png', showButton: false },
    { adi: 'Kus 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'kus-image.png', showButton: false },
  ];
  kopekKartlar: Kopek[] = [
    { adi: 'Kopek 1', yasi: 2, cinsiyeti: 'Erkek', gorseli: 'dog.png', showButton: false },
    { adi: 'Kopek 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'dog.png', showButton: false },
    { adi: 'Kopek 3', yasi: 4, cinsiyeti: 'Erkek', gorseli: 'dog.png', showButton: false },
    { adi: 'Kopek 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'dog.png', showButton: false },
    { adi: 'Kopek 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'dog.png' , showButton: false},
    { adi: 'Kopek 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'dog.png', showButton: false },
    { adi: 'Kopek 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'dog.png', showButton: false },
    { adi: 'Kopek 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'dog.png', showButton: false },
    { adi: 'Kopek 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'dog.png', showButton: false },
    { adi: 'Kopek 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'dog.png', showButton: false },
    { adi: 'Kopek 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'dog.png', showButton: false },
    { adi: 'Kopek 2', yasi: 3, cinsiyeti: 'Dişi', gorseli: 'dog.png', showButton: false },
  ];


  //model için 
visible: boolean = false;

showDialog() {
    this.visible = true;
}
//about
@ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
animation!: AnimationItem;

OnDestroy() {
  if (this.animation) {
    this.animation.destroy();
  }
}

initializeAnimation() {
  this.animation = (window as any).lottie.loadAnimation({
    container: this.lottieContainer.nativeElement,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/animations/about.json' // Animasyon dosyasının yolunu buraya göre ayarlayın
  });

}
}
