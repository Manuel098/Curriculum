import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-animated-divider',
  standalone: true,
  imports: [],
  templateUrl: './animated-divider.component.html',
  styleUrl: './animated-divider.component.scss'
})
export class AnimatedDividerComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @ViewChild('divider', { static: false }) dividerRef!: ElementRef;
  isVisible = false;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window && this.dividerRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          } else if (this.isVisible === true) {
            this.isVisible = false;
          }
        },
        { threshold: 0.3 }
      );
  
      observer.observe(this.dividerRef.nativeElement);
    }
  
  }
}
