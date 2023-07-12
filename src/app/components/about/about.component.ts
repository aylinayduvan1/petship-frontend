import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import * as lottie from 'lottie-web';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent { 
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


}
