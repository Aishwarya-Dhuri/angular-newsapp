import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key = 'c89b484394ca4f3fb24a79bb831a4ee1';

  constructor(private http:HttpClient) { }

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }


}
