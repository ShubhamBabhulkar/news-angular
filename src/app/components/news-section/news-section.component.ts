import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.authService.currentUser());
  }
}
