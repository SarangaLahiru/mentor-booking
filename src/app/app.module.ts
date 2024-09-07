import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthService } from './services/auth.service';
import { BookingService } from './services/booking.service';
import { MentorService } from './services/mentor.service';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // SignupComponent,
    HomeComponent,
    // MentorDetailsComponent,
    // BookingComponent,
    // MyBookingsComponent,
    // AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, MentorService, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
