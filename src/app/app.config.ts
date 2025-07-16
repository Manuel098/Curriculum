import { ApplicationConfig, APP_INITIALIZER, inject, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withComponentInputBinding,
} from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');
}

export function appInitializerFactory(translate: TranslateService, platformId: Object) {
  return () => {
    if (isPlatformBrowser(platformId)) {
      const lang = localStorage.getItem('lang') || 'en';
      translate.setDefaultLang('en');
      return translate.use(lang).toPromise();
    } else {
      translate.setDefaultLang('en');
      return Promise.resolve();
    }
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withEnabledBlockingInitialNavigation(), withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      })
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: () => appInitializerFactory(inject(TranslateService), inject(PLATFORM_ID)),
      multi: true
    }
  ]
};
