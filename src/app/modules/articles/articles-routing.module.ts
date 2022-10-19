import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { AddArticleComponent } from './components/add-article/add-article.component';

const routes: Routes = [
  { path: '', redirectTo: 'articles-list', pathMatch: 'full' },
  { path: 'articles-list', component: ArticlesListComponent },
  { path: 'article-details/:id', component: ArticleDetailsComponent },
  { path: 'add-article', component: AddArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
