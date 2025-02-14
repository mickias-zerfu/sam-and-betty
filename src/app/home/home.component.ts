import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  swiperConfig: SwiperOptions = {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'fade', // Smooth fade transition
    speed: 1000, // Transition speed in milliseconds
  };

  ngOnInit(): void {
    this.startCountdown();
    this.initSwiper();
  }

  startCountdown(): void {
    const weddingDate = new Date('February 22, 2025').getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      document.getElementById('countdown')!.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
  }

  initSwiper(): void {
    new Swiper('.swiper-container', this.swiperConfig);
  }
}