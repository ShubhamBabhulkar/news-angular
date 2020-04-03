import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    console.log(this.authService.currentUser());
    this.getNews();
  }

  getNews = () => {
    this.errorMessage = '';
    this.newsService.getNews().subscribe( result => {
      }, error => {
        this.errorMessage = error.error;
      });
  }
}
