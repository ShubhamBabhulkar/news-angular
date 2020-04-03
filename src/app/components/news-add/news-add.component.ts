import { NewsService } from './../../service/news.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

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
    private newsService: NewsService
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
      }, error => {
        this.errorMessage = error.error;
      });
  }
}
