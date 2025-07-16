import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    const defaultLang = 'en';

    if (isPlatformBrowser(this.platformId)) {
      const storedLang = localStorage.getItem('lang');
      const langToUse = storedLang || defaultLang;

      this.translate.setDefaultLang(defaultLang);
      this.translate.use(langToUse);
    } else {
      this.translate.setDefaultLang(defaultLang);
    }
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}
