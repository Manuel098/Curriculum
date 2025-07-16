import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() languageChange = new EventEmitter<string>();
  currentLang = 'en';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private translate: TranslateService) {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang') || 'en';
      this.currentLang = savedLang;
      this.translate.setDefaultLang('en');
      this.translate.use(savedLang);
    } else {
      // En SSR o prerendering, usar por defecto inglés (o el que quieras)
      this.translate.setDefaultLang('en');
      this.currentLang = 'en';
    }
  }

  onLangChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const lang = selectElement.value;
    this.languageChange.emit(lang);
  }
}

