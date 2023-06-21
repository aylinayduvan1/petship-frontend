import { Component, Input, ElementRef, OnInit, ViewChild, AfterViewInit , HostListener, EventEmitter, Output} from '@angular/core';
import { AnimationItem } from 'lottie-web'; 
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



  constructor() { }

  ngOnInit(): void {
    this.currentContent = 'home'; // Örnek olarak 'home' değerini ata (istediğiniz varsayılan içeriği belirleyin)

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
}
