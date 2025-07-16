import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-button',
  standalone: true,
  imports: [],
  templateUrl: './link-button.component.html',
  styleUrl: './link-button.component.scss'
})
export class LinkButtonComponent {
  @Input() url: string = '';
  @Input() image: string = '';
}
