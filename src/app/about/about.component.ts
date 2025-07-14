import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimatedDividerComponent } from '../animated-divider/animated-divider.component';
import { LinkButtonComponent } from '../link-button/link-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslateModule, AnimatedDividerComponent, LinkButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  btns = [
    {icon: 'logos/github.webp', url: 'https://www.google.com'},
    {icon: 'logos/hackerrank.webp', url: 'https://www.google.com'},
    {icon: 'logos/linkeding.webp', url: 'https://www.google.com'},
    {icon: 'logos/udemy.webp', url: 'https://www.google.com'}
  ];
}
