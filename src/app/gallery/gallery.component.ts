import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MDCImageList } from '@material/image-list';
import Glide from '@glidejs/glide';
import { NgxMasonryModule } from 'ngx-masonry';
@Component({
  selector: 'app-gallery',
  standalone: true, 
  imports: [CommonModule,NgxMasonryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.loadImages();
    this.loadMasonaryImages();
  }
  @ViewChild('galleryGlide', { static: false }) galleryGlide!: ElementRef;
  OurImages: string[] = [];
  masonaryImages: string[] = [];
  ngAfterViewInit(): void {
    new Glide(this.galleryGlide.nativeElement, {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      autoplay: 3000,
      hoverpause: true,
      animationDuration: 1000,
      gap: 10,
    }).mount();
    new Glide('.gallery-slider', {
      type: 'carousel',
      autoplay: 3000,
      hoverpause: true,
      perView: 3,
      gap: 20,
      animationDuration: 1000,
      breakpoints: {
        1024: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();

    // new MDCImageList(this.masonryList.nativeElement);
  }
  loadImages(): void {
    for (let i = 10; i <= 20; i++) {
      this.OurImages.push(`assets/images/0${i}.webp`);
    }
  }
  
  loadMasonaryImages() {
    for (let i = 40; i <= 50; i++) {
      this.masonaryImages.push(`assets/images/0${i}.webp`);
  }
}
  getRandomSize() {
    const sizes = ['h-40', 'h-56', 'h-72', 'h-96'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  }
}
