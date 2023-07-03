import { Component, Input} from '@angular/core';
declare let lottie: any;


@Component({
  selector: 'app-homepage',
  templateUrl: '../homepage/homepage.component.html',
  styleUrls: ['../homepage/homepage.component.css']
})
export class HomepageComponent {
 


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


  
