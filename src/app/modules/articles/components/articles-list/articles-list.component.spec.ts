/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { ArticlesListComponent } from './articles-list.component';
import { ArticleService } from "../../article.service";

class MockArticleService extends ArticleService {
  isAuthenticated() {
    return 'Mocked';
  }
}

describe('Component: Articles List', () => {

  let component: ArticlesListComponent;
  let fixture: ComponentFixture<ArticlesListComponent>;
  let testBedService: ArticleService;
  let componentService: ArticleService;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [ArticlesListComponent],
      providers: [ArticleService]
    });

    // Configure the component with another set of Providers
    TestBed.overrideComponent(
      ArticlesListComponent,
      { set: { providers: [{ provide: ArticleService, useClass: MockArticleService }] } }
    );

    // create component and test fixture
    fixture = TestBed.createComponent(ArticlesListComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // ArticleService provided to the TestBed
    testBedService = TestBed.get(ArticleService);

    // ArticleService provided by Component, (should return MockArticleService)
    componentService = fixture.debugElement.injector.get(ArticleService);
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([ArticleService], (injectService: ArticleService) => {
      expect(injectService).toBe(testBedService);
    })
  );

  it('Service injected via component should be and instance of MockArticleService', () => {
    expect(componentService instanceof MockArticleService).toBeTruthy();
  });

  // it('Service get list of all articles', () => {
  //   const articleServiceSpy = spyOn(articleService, 'getArticles').and.callThrough();
  //   expect(componentService.getArticles).toHaveBeenCalled();
  // });
});

// import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

// import { ArticlesListComponent } from './articles-list.component';
// import { ArticleService } from '../../article.service';
// import { Article } from '../../article.interface';
// import { BehaviorSubject, Observable } from 'rxjs';

// describe('ArticlesListComponent', () => {
//   let articles$: BehaviorSubject<[]>;
//   let component: ArticlesListComponent;
//   let fixture: ComponentFixture<ArticlesListComponent>;
//   let testBedService: ArticleService;
//   let fakeArticleService: ArticleService;

//   beforeEach(async () => {

//     articles$ = new BehaviorSubject([]);
//     let content = 'Nine of the 10 top earners in the Spanish top flight play for one of the big two superclubs.';
//     let articles!: Article[],

//       // fakeArticleService = {
//       //   getArticles() {
//       //     return [];
//       //   },
//       //   getArticle(articleId: number) {
//       //     let article = {
//       //       id: articleId,
//       //       imagePath: "assets/images/article-1.png",
//       //       title: 'Xavi makes massive request to Frenki De Jong amid exit links',
//       //       content: content,
//       //       publisher: 'Lalita Paluri',
//       //       publishedOn: '24-08-2022'
//       //     };
//       //     return article;
//       //   }
//       // };
//       // spyOn(fakeArticleService, 'getArticles').and.callThrough();
//       // spyOn(fakeArticleService, 'getArticle').and.callThrough();

//       // ArticleService from the root injector
//       fakeArticleService = TestBed.inject(ArticleService);
//     spyOn(fakeArticleService, 'getArticles'); // why?
//     spyOn(fakeArticleService, 'getArticle'); // why?

//     await TestBed.configureTestingModule({
//       declarations: [ArticlesListComponent],
//       providers: [{ provide: ArticleService, useValue: fakeArticleService }]
//     }).compileComponents();

//     fixture = TestBed.createComponent(ArticlesListComponent);
//     component = fixture.componentInstance;

//     testBedService = TestBed.get(ArticleService);

//     fakeArticleService = fixture.debugElement.injector.get(ArticleService);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });


//   it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
//     inject([ArticleService], (injectService: ArticleService) => {
//       expect(injectService).toBe(testBedService);
//     })
//   );


//   it('get list of all articles', () => {
//     console.log('fakeArticleService', fakeArticleService);
//     expect(fakeArticleService.getArticles).toHaveBeenCalled();

//     // // set up spies, could also call a fake method in case you don't want the API call to go through
//     // const articleServiceSpy = spyOn(fakeArticleService, 'getArticles').and.callThrough();
//     // const componentSpy = spyOn(component, 'getArticles').and.callThrough();

//     // // make sure they haven't been called yet
//     // expect(articleServiceSpy).not.toHaveBeenCalled();
//     // expect(componentSpy).not.toHaveBeenCalled();

//     // // depending on how your component is set up, fixture.detectChanges() might be enough
//     // component.ngOnInit();

//     // expect(articleServiceSpy).toHaveBeenCalledTimes(1);
//     // expect(componentSpy).toHaveBeenCalledTimes(1);
//   });
// });


