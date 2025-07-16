import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../Components/experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experience = [{
    "img": "logos/unipoli.webp",
    "company": "Universidad Politecnica de durango",
    "location": "Durango, Dgo Mx.",
    "time": "EXPERIENCE.UNIPOLI.POSITION",
    "description": "EXPERIENCE.UNIPOLI.DESC",
    "technologies": []
  }, {
    "img": "logos/onm6.webp",
    "company": "OnM6 Connect",
    "location": "Omaha, Nebraska USA",
    "time": "EXPERIENCE.ONM6.POSITION",
    "description": "EXPERIENCE.ONM6.DESC",
    "technologies": [{
      "img": "techs/laravel.webp",
      "title": "Laravel",
      "experience": "EXPERIENCE.ONM6.TECH.LARAVEL"
    },{
      "img": "techs/node.webp",
      "title": "Node/Express",
      "experience": "EXPERIENCE.ONM6.TECH.EXPRESS"
    },{
      "img": "techs/vue.webp",
      "title": "Vue",
      "experience": "EXPERIENCE.ONM6.TECH.VUE"
    },{
      "img": "techs/mysql.webp",
      "title": "MySQL",
      "experience": "EXPERIENCE.ONM6.TECH.MYSQL"
    },{
      "img": "techs/mailchimp.webp",
      "title": "MailChimp",
      "experience": "EXPERIENCE.ONM6.TECH.MAILCHIMP"
    }]
  }].reverse();
}
