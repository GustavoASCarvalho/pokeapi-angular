import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewsletterComponent } from './form-newsletter.component';

describe('FormNewsletterComponent', () => {
  let component: FormNewsletterComponent;
  let fixture: ComponentFixture<FormNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewsletterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
