import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ArticleService } from '../../article.service';
import { Article } from '../../article.interface';
import { Response } from "src/app/core/models/response.model";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }

  // article$: Observable<Article>;
  article$: Article | undefined;

  ngOnInit(): void {
    this.getArticleById();
  }

  getArticleById() {
    const articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticleById(articleId).subscribe((res: Response) => {
      this.article$ = res?.data;
    });
  }

}
