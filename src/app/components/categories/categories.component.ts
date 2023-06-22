import { Component, Input } from '@angular/core';
declare let lottie: any;


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
  
  
export class CategoriesComponent {
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
}
