import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes'; // Import file routes
import { provideClientHydration } from '@angular/platform-browser'; // Import cho SSR
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import để gọi API

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch()) 
  ]
};