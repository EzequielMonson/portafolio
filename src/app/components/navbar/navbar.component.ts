import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faLaptopCode = faLaptopCode;
  constructor(private router: Router){}

  goTo(ruta: string){
    if (ruta === '/'){
      this.router.navigate([`/`])
    }
    else {
      this.router.navigate([`${ruta}`])
    }
  }
}
