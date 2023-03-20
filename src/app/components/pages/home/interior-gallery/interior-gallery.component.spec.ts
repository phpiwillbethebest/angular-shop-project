import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorGalleryComponent } from './interior-gallery.component';

describe('InteriorGalleryComponent', () => {
  let component: InteriorGalleryComponent;
  let fixture: ComponentFixture<InteriorGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
