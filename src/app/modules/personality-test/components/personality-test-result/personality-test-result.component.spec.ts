import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityTestResultComponent } from './personality-test-result.component';

describe('PersonalityTestResultComponent', () => {
  let component: PersonalityTestResultComponent;
  let fixture: ComponentFixture<PersonalityTestResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityTestResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalityTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
