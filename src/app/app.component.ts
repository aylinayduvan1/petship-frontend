import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  currentContent: string = 'home';

  changeContent(content: string) {
    this.currentContent = content;
  }
}
