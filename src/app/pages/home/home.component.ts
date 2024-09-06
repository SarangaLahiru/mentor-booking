import { Component, OnInit } from '@angular/core';
import { MentorService } from '../../services/mentor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mentors: any[] = [];

  constructor(private mentorService: MentorService) { }

  ngOnInit(): void {
    this.mentorService.getMentors().subscribe(data => {
      this.mentors = data;
    });
  }
}
