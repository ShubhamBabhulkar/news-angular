import { NewsService } from './../../service/news.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { NewsSectionComponent } from '../news-section/news-section.component';
import {MatSnackBar} from '@angular/material/snack-bar';

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
  successfullyAdd: any;
  constructor(
    private newsService: NewsService,
    private newsSectionComponent: NewsSectionComponent,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  getrequired = (value) => {
    return this.addNewsForm.get(value);
  }

  addNews = (data) => {
    this.newsService.addNews(data).subscribe( result => {
      this.addNewsForm.reset();
      this.newsSectionComponent.getNews();
      this.newsSectionComponent.getMyNews();
      this.snackBar.open('News added successfully', 'Ok', {
        duration: 5000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
      }, error => {
        this.snackBar.open(error.error, 'Done', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
      });
  }
}
