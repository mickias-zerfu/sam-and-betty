import { Component, AfterViewInit } from '@angular/core';
import Glide from '@glidejs/glide';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit {
  groomImages = [
    'assets/images/042.webp',
    'assets/images/044.webp',
    'assets/images/07.webp',
    'assets/images/063.webp',
    'assets/images/065.webp'
  ];

  brideImages = [
    'assets/images/012.webp',
    'assets/images/019.webp',
    'assets/images/050.webp',
    'assets/images/047.webp',
  ];

  ngAfterViewInit(): void {
    // Initialize Groom Slider
    new Glide('.groom-slider', {
      type: 'slider',
      autoplay: 3000,
      hoverpause: true,
      perView: 1,
      gap: 10,
      animationDuration: 1000,
    }).mount();

    // Initialize Bride Slider
    new Glide('.bride-slider', {
      type: 'carousel',
      autoplay: 3000,
      hoverpause: true,
      perView: 2,
      gap: 0,      
      animationDuration: 1000,
    }).mount();
  }
}