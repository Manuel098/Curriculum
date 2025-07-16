import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TecnologyBtnComponent } from '../tecnology-btn/tecnology-btn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, TecnologyBtnComponent, TranslateModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  @Input() img: string = "";
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() location: string = "";
  @Input() content: string = "";
  @Input() technologies: Array<{ img: string; title: string; experience:string; }> = [];
}
