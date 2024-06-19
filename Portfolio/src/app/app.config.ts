import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
};

export const provideTranslation = () => ({
  defaultLanguage: 'es',
  loader: {
    provide: TranslateLoader,
    useFactory: TranslateLoaderFactory,
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(
      { eventCoalescing: true },
    ),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(),
    BrowserModule,
    importProvidersFrom([
      TranslateModule.forRoot(provideTranslation()),
    ]),
  ],
};

