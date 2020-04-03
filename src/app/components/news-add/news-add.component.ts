import { MAT_DIALOG_DATA } from '@angular/material';
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
    ]),

  });
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    console.log('data', data);
  }

  ngOnInit() {
  }

  getrequired = (value) => {
    return this.addNewsForm.get(value);
  }
}
