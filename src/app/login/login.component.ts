import { Component, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({ //@Component dekoratörü, bu sınıfın bir Angular bileşeni olduğunu belirtir.
  // ([(ngModel)]) kullanarak bileşenin email ve password özellikleriyle senkronize edilir
  selector: 'app-login',
  template: `
    <h1>Login</h1>
    <form (ngSubmit)="onSubmit()">

      <label>Email:</label>
      <input type="email" [(ngModel)]="email" name="email" required>

      <label>Password:</label>
      <input type="password" [(ngModel)]="password" name="password" required>

      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  email: string ='';
  password: string='';

  constructor(@Inject(AuthService) private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.email, this.password)
      .subscribe(
        (response: any) => {
          // Giriş başarılı, token veya diğer gerekli verileri kullanabilirsiniz
          console.log('Login successful', response);
        },
        (error: any) => {
          // Giriş başarısız, hata mesajını gösterebilirsiniz
          console.error('Login error', error);
        }
      );
  }
}
