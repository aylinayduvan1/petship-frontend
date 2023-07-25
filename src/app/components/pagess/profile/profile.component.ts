import { Component, Input, ElementRef, OnInit, ViewChild, AfterViewInit , HostListener, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web'; 
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
declare let lottie: any;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() contentChange: EventEmitter<string> = new EventEmitter<string>();
  currentContent: string = 'home';

  changeContent(content: string) {
    this.currentContent = content;
  }

  currentUser: User | null;

  constructor(
    private authService: AuthService,
    private router: Router) {
    this.currentUser = null;
  }



  ngOnInit(): void {
    this.currentContent = 'home'; // Örnek olarak 'home' değerini ata (istediğiniz varsayılan içeriği belirleyin)
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });


     // Profil sayfası açıldığında, kullanıcının giriş yapmış olup olmadığını kontrol ediyoruz.
    if (!this.authService.isLoggedIn()) {
      // Kullanıcı giriş yapmamışsa, başka bir sayfaya yönlendirilebilirsiniz.
      // Örneğin:
      this.router.navigate(['/login']);
      console.log('Kullanıcı giriş yapmamış, profil sayfasına erişim engellendi.');
  }

  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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


  logOut(): void {
    // AuthService içindeki logout() metodunu çağırarak çıkış işlemini gerçekleştirin
    this.authService.logOut();
    this.router.navigate(['/login']); 

  }



}
