import { Component, OnInit } from '@angular/core';
import { MentorService } from '../../services/mentor.service';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.css']
})
export class MentorDetailsComponent implements OnInit {
  mentors: any[] = [];

  constructor(private mentorService: MentorService) {}

  ngOnInit() {
    this.mentorService.getMentors().subscribe(
      data => this.mentors = data,
      error => console.error('Error fetching mentors', error)
    );
  }
}
