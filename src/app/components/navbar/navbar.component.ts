import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import * as lottie from 'lottie-web';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: '../navbar/navbar.component.html',
  styleUrls: ['../navbar/navbar.component.css']
})
export class NavbarComponent  {
  constructor(
    private authService: AuthService,
    private router: Router) {
  }

   // Eksik olan isLoggedIn() metodu AuthService'den alınarak buraya ekleniyor.
   isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  animation!: AnimationItem;

  ngOnInit() {
     // Profil sayfası açıldığında, kullanıcının giriş yapmış olup olmadığını kontrol ediyoruz.
     if (!this.authService.isLoggedIn()) {
      // Kullanıcı giriş yapmamışsa, başka bir sayfaya yönlendirilebilirsiniz.
      // Örneğin:
      this.router.navigate(['/home']);
      console.log('Kullanıcı giriş yapmamış, profil sayfasına erişim engellendi.');
  }

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

  logOut(): void {
    // AuthService içindeki logout() metodunu çağırarak çıkış işlemini gerçekleştirin
    this.authService.logOut();
  }

}