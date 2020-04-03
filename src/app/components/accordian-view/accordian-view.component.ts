import { ConfirmationPopupComponent } from './../confirmation-popup/confirmation-popup.component';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import {MatDialog} from '@angular/material';
import { NewsSectionComponent } from '../news-section/news-section.component';
import { EditNewsPopupComponent } from '../edit-news-popup/edit-news-popup.component';
@Component({
  selector: 'app-accordian-view',
  templateUrl: './accordian-view.component.html',
  styleUrls: ['./accordian-view.component.scss']
})
export class AccordianViewComponent implements OnInit {
  @Input('news') news;
  errorMessage: string;
  newsIdforEdit: any;
  constructor(
    public authService: AuthService,
    private newsService: NewsService,
    private dialog: MatDialog,
    private newsSectionComponent: NewsSectionComponent
  ) { }

  ngOnInit() {
  }
  openDialog = (newsId) => {
    this.dialog.open(ConfirmationPopupComponent, {
      data: {news_id: newsId}
    })
    .afterClosed()
    .subscribe(result => {
      if (result !== 'close') {
          this.deleteNews(result);
      }
    });
  }

  openEditDialog = (news) => {
    this.newsIdforEdit = news._id;
    this.dialog.open(EditNewsPopupComponent, {
      data: news
    })
    .afterClosed()
    .subscribe(result => {
      if (result !== 'close') {
        this.editNews(this.newsIdforEdit, result);
      } else {
        this.newsIdforEdit = '';
      }
    });
  }

  editNews = (newsId, editedNews) => {
    this.errorMessage = '';
    this.newsService.editNews(newsId, editedNews).subscribe( result => {
      this.newsSectionComponent.getNews();
      this.newsSectionComponent.getMyNews();
    }, error => {
        this.errorMessage = error.error;
      });
  }

  deleteNews = (newsId) => {
    this.errorMessage = '';
    this.newsService.deleteNews(newsId).subscribe( result => {
      this.newsSectionComponent.getNews();
      this.newsSectionComponent.getMyNews();
    }, error => {
        this.errorMessage = error.error;
      });
  }

}
