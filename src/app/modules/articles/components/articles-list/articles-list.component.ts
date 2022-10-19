import { Component, OnInit } from '@angular/core';

import { Article } from '../../article.interface';
import { ArticleService } from '../../article.service';

import { Response } from 'src/app/core/models/response.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  isContentAvailable: boolean = true;

  articles$: Article[] = [];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    // this.articles$ = this.articleService.getArticlesJson();

    this.articleService.getArticles().subscribe((res: Response) => {
      this.articles$ = res?.data;
      this.isContentAvailable = this.articles$.length > 0 ? true : false;
    });
  }

}
