import { NewsApiService } from './services/news-api.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  mArticles:Array<any>;
  mSources:Array<any>;
  constructor(private newsapi:NewsApiService){
  }
    ngOnInit() {
      //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
      //load news sources
      this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
    }

    searchArticles(source){
      console.log("selected source is: "+source);
      this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
    }
}
