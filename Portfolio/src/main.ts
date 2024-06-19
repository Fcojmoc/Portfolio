import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(appRef => {
    const translate = appRef.injector.get(TranslateService);
    translate.setDefaultLang('es');
    translate.use('es');
  })
  .catch((err) => console.error(err));
