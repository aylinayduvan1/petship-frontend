import { Component, Input, ElementRef, OnInit, ViewChild,AfterViewInit , HostListener} from '@angular/core';
declare let lottie: any;
import { AnimationItem } from 'lottie-web';


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
  selector: 'app-homepage',
  templateUrl: '../homepage/homepage.component.html',
  styleUrls: ['../homepage/homepage.component.css']
})
export class HomepageComponent {
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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


//about
@ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
animation!: AnimationItem;

ngOnInit() {
  this.initializeAnimation();
}

ngOnDestroy() {
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

//up button
@ViewChild('animationContainer', { static: true }) private animationContainer!: ElementRef;
private animationInstance!: AnimationItem;
isScrolledToTop: boolean = true;
isScrollingDown: boolean = false;

ngAfterViewInit(): void {
  const animationOptions: any = {
    container: this.animationContainer.nativeElement,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/upbutton.json' // Lottie animasyonunun yolu
  };

  this.animationInstance = lottie.loadAnimation(animationOptions);
}

@HostListener('window:scroll')
onWindowScroll(): void {
  const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  this.isScrollingDown = scrollOffset > 0;
  this.isScrolledToTop = scrollOffset === 0;
}

scrollToTop(): void {
  if (this.isScrolledToTop) {
    return;
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

//model için 
visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}


  
