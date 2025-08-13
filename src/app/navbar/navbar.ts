import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  navbarHeight!: string;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;

    if (scrollY > 1) {
      this.navbarHeight = '75px';
    } else {
      this.navbarHeight = '106px';
    }
  }
  
}
