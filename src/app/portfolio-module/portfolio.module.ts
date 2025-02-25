import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { TabsGalleryComponent } from './components/tabs-gallery/tabs-gallery.component';
import { filterGalleryPipe } from './utils/filterGallery.pipe';
import { SlideComponent } from './components/slide/slide.component';
import { ModalDetailComponent } from './components/modal-detail/modal-detail.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [GalleryComponent, MainPageComponent, TabsGalleryComponent, filterGalleryPipe, SlideComponent, ModalDetailComponent, SpinnerComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [GalleryComponent, MainPageComponent],
})
export class PortfolioModule {}
