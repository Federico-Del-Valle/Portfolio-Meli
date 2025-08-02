import { bootstrapApplication }from '@angular/platform-browser';
import { importProvidersFrom }from '@angular/core';
import { provideRouter }from '@angular/router';
import { FormsModule }from '@angular/forms';
import { AppComponent }from './app/app.component';
import { routes }from './app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule, HttpClientModule)
  ]
})
.catch(err => console.error(err));