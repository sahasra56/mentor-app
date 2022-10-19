import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services';

import { Article } from './article.interface';
import { URLConstants } from 'src/app/core/constants/url-constants';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  description = `Nine of the 10 top earners in the Spanish top flight play for one of the big two superclubs. It won’t be a great surprise to see that the other plays for Atletico Madrid.
  But which are the 10 individual players that make up the list? There are a couple of surprising names, and a couple of surprising commissions, who will surely be on at their agents to negotiate more dosh when they next sign a new deal.
  
  Here’s the top 10 in full, ordered by their weekly wages*, in the 2022-23 season.
  Nine of the 10 top earners in the Spanish top flight play for one of the big two superclubs. It won’t be a great surprise to see that the other plays for Atletico Madrid.
  But which are the 10 individual players that make up the list? There are a couple of surprising names, and a couple of surprising commissions, who will surely be on at their agents to negotiate more dosh when they next sign a new deal.
  
  Here’s the top 10 in full, ordered by their weekly wages*, in the 2022-23 season.`;
  
  articles!: Article[];

  constructor(
    private httpService: HttpService
  ) { }

  getArticlesJson() {
    return this.articles = [{
      _id: 1,
      imagePath: "assets/images/article-1.png",
      title: 'Xavi makes massive request to Frenki De Jong amid exit links',
      description: this.description,
      publisher: 'Lalita Paluri',
      createdAt: '24-08-2022'
    }, {
      _id: 2,
      imagePath: "assets/images/article-2.png",
      title: 'Biggest Transfers We Didn’t See This Summer',
      description: this.description,
      publisher: 'Lalita Paluri',
      createdAt: '24-08-2022'
    }, {
      _id: 3,
      imagePath: "assets/images/article-3.png",
      title: 'The 10 highest paid players in La Liga for 22-23: Pique, Hazard, De Jong',
      description: this.description,
      publisher: 'Lalita Paluri',
      createdAt: '24-08-2022'
    }, {
      _id: 4,
      imagePath: "assets/images/article-4.png",
      title: 'Barcelona coach Xavi: I want to have Jordi Alba here',
      description: this.description,
      publisher: 'Lalita Paluri',
      createdAt: '24-08-2022'
    }];
  }

  getArticles() {
    return this.httpService.get(URLConstants.GET_ARTICLES_API);
  }

  getArticleById(articleId: number) {
    return this.httpService.get(`${URLConstants.GET_ARTICLE_BY_ID_API}/${articleId}`);
  }

  createArticle(payload: Article) {
    return this.httpService.post(URLConstants.CREATE_ARTICLE_API, payload);
  }
  
  deleteArticle(articleId: number) {
    return this.httpService.delete(`${URLConstants.DELETE_ARTICLE_API}/${articleId}`);
  }
}
