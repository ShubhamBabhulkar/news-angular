import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpRequest: HttpClient) { }
  private baseUrl = 'http://localhost:3000/';

  addNews = (news) => {
    return this.httpRequest.post(this.baseUrl + 'news', news);
  }
}
