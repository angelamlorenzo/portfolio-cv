import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsGalleryComponent } from './tabs-gallery.component';

describe('TabsGalleryComponent', () => {
  let component: TabsGalleryComponent;
  let fixture: ComponentFixture<TabsGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsGalleryComponent]
    });
    fixture = TestBed.createComponent(TabsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
