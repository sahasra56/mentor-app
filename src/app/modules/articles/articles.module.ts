import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { AddArticleComponent } from './components/add-article/add-article.component';

// import { AccessControlDirective } from 'src/app/core/directives/access-control.directive';

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleDetailsComponent,
    AddArticleComponent,
    // AccessControlDirective
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule
  ]
})
export class ArticlesModule { }
