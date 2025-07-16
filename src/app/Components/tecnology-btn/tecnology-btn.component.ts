import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tecnology-btn',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tecnology-btn.component.html',
  styleUrl: './tecnology-btn.component.scss'
})
export class TecnologyBtnComponent {
  constructor(private elementRef: ElementRef) {}
  @Input() img:string = "";
  @Input() title:string = "";
  @Input() experience:string = "";

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }
}
