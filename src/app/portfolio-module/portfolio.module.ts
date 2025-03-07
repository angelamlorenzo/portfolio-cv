import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { TabsGalleryComponent } from "./components/tabs-gallery/tabs-gallery.component";
import { filterGalleryPipe } from "./utils/filterGallery.pipe";
import { SlideComponent } from "./components/slide/slide.component";
import { ModalDetailComponent } from "./components/modal-detail/modal-detail.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CoverComponent } from "./components/cover/cover.component";
import { ProgressBarsComponent } from "./components/progress-bars/progress-bars.component";
import { WorkExperienceComponent } from "./components/work-experience/work-experience.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { RouterModule, Routes } from "@angular/router";
import { ProjectPageComponent } from "./pages/project-page/project-page.component";
import { AppRoutingModule } from "../app-routing.module";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "projects/:title", component: ProjectPageComponent },
];

@NgModule({
  declarations: [
    GalleryComponent,
    MainPageComponent,
    TabsGalleryComponent,
    filterGalleryPipe,
    SlideComponent,
    ModalDetailComponent,
    SpinnerComponent,
    NavbarComponent,
    CoverComponent,
    ProgressBarsComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    ProjectPageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [GalleryComponent, MainPageComponent, ProjectPageComponent, RouterModule],
})
export class PortfolioModule {}
