import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Response } from 'src/app/core/models';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  articleForm!: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      articleImage: [null]
    });
  }

  handleSaveArticle() {
    this.articleService.createArticle(this.articleForm.value).subscribe((res: Response) => {
      this.router.navigate(['/articles']);
    });
  }

}
