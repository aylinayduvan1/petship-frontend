import { Component} from '@angular/core';

@Component({
  selector: 'app-root',  //bileşenin hangi HTML öğesi ile eşleştirileceğini belirtir. app-root ana bileşen
  templateUrl: './app.component.html',  //bileşenin şablonunun bulunduğu dosyayı belirtir.
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  currentContent: string = 'home';  //bir dize (string) tipinde tanımlanır ve başlangıç değeri olarak 'home' atanır.

  changeContent(content: string) {  //bileşenin mevcut içeriğini değiştirmek için kullanılır. kullanıcı etkileşimine bağlı olarak içerik değiştirilebilir veya güncellenebilir.
    this.currentContent = content;
  }
}
