import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-edit-news-popup',
  templateUrl: './edit-news-popup.component.html',
  styleUrls: ['./edit-news-popup.component.scss']
})
export class EditNewsPopupComponent implements OnInit {
  newsEditForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5000),
    ])
  });
  newsforEdit: any;

  constructor(@Inject(MAT_DIALOG_DATA) news: any) {
    this.newsforEdit = news;
  }

  ngOnInit() {}
  getrequired = (value) => {
    return this.newsEditForm.get(value);
  }
}
