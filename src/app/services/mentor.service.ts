import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http: HttpClient) { }

  getMentors(): Observable<any> {
    return this.http.get('/api/mentors');
  }

  getMentorDetails(id: string): Observable<any> {
    return this.http.get(`/api/mentors/${id}`);
  }
}
