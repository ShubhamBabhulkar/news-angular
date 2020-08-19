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
  allNews: Object;
  myNews: any;

  constructor(
    private authService: AuthService,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.getNews();
    this.getMyNews();
  }

  getNews = () => {
    this.authService.setLoading(true);
    this.errorMessage = '';
    this.newsService.getNews().subscribe( result => {
        this.allNews = result['news'];
        this.authService.setLoading(false);
      }, error => {
        this.authService.setLoading(false);
        this.allNews = [];
        this.errorMessage = error.error;
      });
  }

  getMyNews = () => {
    this.authService.setLoading(true);
    this.errorMessage = '';
    this.newsService.getMyNews().subscribe( result => {
        this.myNews = result['news'];
        this.authService.setLoading(false);
      }, error => {
        this.authService.setLoading(false);
        this.myNews = [];
        this.errorMessage = error.error;
      });
  }
}