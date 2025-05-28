import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { TabsGalleryComponent } from "./components/tabs-gallery/tabs-gallery.component";
import { filterGalleryPipe } from "./utils/filterGallery.pipe";
import { SlideComponent } from "./components/slide/slide.component";
import { ProjectDetailComponent } from "./components/project-detail/project-detail.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CoverComponent } from "./components/cover/cover.component";
import { ProgressBarsComponent } from "./components/progress-bars/progress-bars.component";
import { WorkExperienceComponent } from "./components/work-experience/work-experience.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { RouterModule, Routes } from "@angular/router";
import { ProjectPageComponent } from "./pages/project-page/project-page.component";
import { TranslateModule } from "@ngx-translate/core"; // Asegúrate de que está importado

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "portfolio/:category/:title", component: ProjectPageComponent },
];

@NgModule({
  declarations: [
    GalleryComponent,
    MainPageComponent,
    TabsGalleryComponent,
    filterGalleryPipe,
    SlideComponent,
    ProjectDetailComponent,
    SpinnerComponent,
    NavbarComponent,
    CoverComponent,
    ProgressBarsComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    ProjectPageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), TranslateModule],
  exports: [GalleryComponent, MainPageComponent, TranslateModule, ProjectPageComponent, RouterModule, NavbarComponent],
})
export class PortfolioModule {}
