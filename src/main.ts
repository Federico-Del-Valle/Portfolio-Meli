import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.module';
import { App } from './app/app.component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
