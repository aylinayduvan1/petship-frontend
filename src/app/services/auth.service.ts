import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//@Injectable dekoratörü, bu sınıfın bir Angular enjekte edilebilir hizmet olduğunu belirtir.
@Injectable({
  providedIn: 'root'
})

export class AuthService{

  private apiUrl = ''; 

  //constructor metodu, HttpClient'in enjekte edildiği ve apiUrl'in ayarlandığı yerdir.
  //AuthService sınıfının constructor yöntemi, HttpClient sınıfının bir örneğini alır ve apiUrl değişkenini ayarlar.
  constructor(private http: HttpClient) { }

  login(email: string, password: string) { //metot bilgileri alır ve nesnede tutar
    const loginData = { Email: email, Password: password };
    return this.http.post(`${this.apiUrl}/login`, loginData); //HttpClient'in post metodunu kullanarak bu verileri API'ye gönderir.
  }
}
