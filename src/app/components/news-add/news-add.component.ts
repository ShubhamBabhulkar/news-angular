import { NewsService } from './../../service/news.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { NewsSectionComponent } from '../news-section/news-section.component';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss']
})
export class NewsAddComponent implements OnInit {

  addNewsForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.pattern('.{5000,}')
    ]),
  });
  errorMessage: string;
  successfullyAdd: any;
  constructor(
    private newsService: NewsService,
    private newsSectionComponent: NewsSectionComponent
  ) {}

  ngOnInit() {
  }

  getrequired = (value) => {
    return this.addNewsForm.get(value);
  }

  addNews = (data) => {
    this.errorMessage = '';
    this.newsService.addNews(data).subscribe( result => {
      this.successfullyAdd = result['message'];
      this.addNewsForm.reset();
      this.newsSectionComponent.getNews();
      this.newsSectionComponent.getMyNews();
      setTimeout(() => {
        this.successfullyAdd = '';
      }, 3000);
      }, error => {
        this.errorMessage = error.error;
      });
  }
}
