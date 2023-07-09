import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginRequest } from 'src/app/models/request/login-request.model';
import { RegisterRequest} from 'src/app/models/request/register-request.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ResponseStatus } from 'src/app/models/response/base-response.model';
import { AnimationItem } from 'lottie-web';

declare let lottie: any;

@Component({
  selector: 'app-loginc',
  templateUrl: '../loginc/loginc.component.html',
  styleUrls: ['../loginc/loginc.component.css'],
  providers: [MessageService]
})
export class LogincComponent {
  @ViewChild('lottieContainer', { static: true }) lottieContainer!: ElementRef;
  animation!: AnimationItem;
  animationRunning = false;
  isLoginFormVisible = true;
  value: string | undefined;
  date: Date | undefined;

  toggleForm() {
    this.isLoginFormVisible = !this.isLoginFormVisible;
    const cardElement:any = document.querySelector('.card');
    cardElement.classList.toggle('flipped');
  }
  
  ngOnDestroy() {
    if (this.animation) {
      this.animation.destroy();
    }
  }

  animalHistoryOptions = [
    { label: 'Hayvan besledim', value: true },
    { label: 'Hayvan beslemedim', value: false }
  ];
  
  animalExitsOptions = [
    { label: 'Hayvanım var', value: true },
    { label: 'Hayvanım yok', value: false }
  ];

  toggleAnimation() {
    if (this.animationRunning) {
      this.animation.stop();
      this.animationRunning = false;
    } else {
      if (this.animation) {
        this.animation.destroy();
      }
      this.initializeAnimation();
      this.animation.play();
      this.animationRunning = true;
    }
  }

  initializeAnimation() {
    this.animation = (window as any).lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'assets/animations/kus.json',
      animationSpeed: 0.9, // Adjust the speed here   
    });
  }

  public registerRequest: RegisterRequest = <RegisterRequest>{};
  public loginRequest: LoginRequest = <LoginRequest>{};

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.initializeAnimation();

  }

  async login() {
    let status = await this.authService.login(this.loginRequest);

    if (status == ResponseStatus.Ok) {
      await this.router.navigate(['']);
      setTimeout(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Giriş yaptınız..' });
        this.router.navigate(['/profile']); // Giriş doğruysa /homepage'e yönlendir
      }, 2000); // 2 saniye (2000 milisaniye) beklet
    } else if (status == ResponseStatus.Invalid)
      this.loginRequest.Password = '';
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Kullanıcı adı veya şifre hatalı' });
  }

  
  async register() {
    let status = await this.authService.register(this.registerRequest);
  
    if (status == ResponseStatus.Ok) {
      setTimeout(() => {
        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Kaydınız başarıyla oluşturuldu.' });
        window.location.reload(); // Refresh the page
      }, 2000); // 2 saniye beklet
    } else if (status == ResponseStatus.Invalid) {
      this.messageService.add({ severity: 'error', summary: 'Hatalı', detail: 'Geçersiz kayıt bilgileri.' });
    }
  }


  
showLoginForm: boolean = true;

showRegisterForm() {
  this.showLoginForm = false;
}
  

}
