import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { NewsAddComponent } from '../news-add/news-add.component';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss']
})
export class NewsSectionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog = () => {
    this.dialog.open(NewsAddComponent, { disableClose: true })
    .afterClosed()
    .subscribe(result => {
      console.log(result); // get result after close dialog...
    });
  }
}
