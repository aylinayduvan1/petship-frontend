import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import * as lottie from 'lottie-web';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

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
      path: 'assets/animations/header2.json' // Animasyon dosyasının yolunu buraya göre ayarlayın
    });

  }
 }
