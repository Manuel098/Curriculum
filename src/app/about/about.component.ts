import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimatedDividerComponent } from '../Components/animated-divider/animated-divider.component';
import { LinkButtonComponent } from '../Components/link-button/link-button.component';
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
    {icon: 'logos/github.webp', url: 'https://github.com/Manuel098/'},
    {icon: 'logos/hackerrank.webp', url: 'https://www.hackerrank.com/manuelvaldez8642'},
    {icon: 'logos/linkeding.webp', url: 'https://www.linkedin.com/in/manuelvaldez21'},
    {icon: 'logos/udemy.webp', url: 'https://www.udemy.com/user/jose-manuel-valdez-gonzalez/'}
  ];
}
