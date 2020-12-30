import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowcaseCarouselComponent } from './showcase-carousel.component';

describe('ShowcaseCarouselComponent', () => {
  let component: ShowcaseCarouselComponent;
  let fixture: ComponentFixture<ShowcaseCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
