import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  lastScrollTop = 0;
  isHeaderVisible = true;

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;
    const heroSectionHeight = document.getElementById('home')?.offsetHeight || 0;

    if (currentScroll < heroSectionHeight) { 
      this.isHeaderVisible = true;
    } else if (currentScroll < this.lastScrollTop) {
      // If scrolling up, show header
      this.isHeaderVisible = true;
    } else {
      // If scrolling down, hide header
      this.isHeaderVisible = true;
    }

    this.lastScrollTop = currentScroll;
  }
  scrollTo(fragment: string): void {
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'auto' });
  }
}
