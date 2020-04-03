import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordian-view',
  templateUrl: './accordian-view.component.html',
  styleUrls: ['./accordian-view.component.scss']
})
export class AccordianViewComponent implements OnInit {
  @Input('news') news;
  constructor() { }

  ngOnInit() {
  }

}
