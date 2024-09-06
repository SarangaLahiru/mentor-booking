import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Import the routes

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Provide the router configuration
  ],
});
