import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'https://api.example.com/bookings';

  constructor(private http: HttpClient) {}

  getBookings(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  bookSlot(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
