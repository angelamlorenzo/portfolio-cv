import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./portfolio-module/pages/main-page/main-page.component";
import { ProjectPageComponent } from "./portfolio-module/pages/project-page/project-page.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./portfolio-module/portfolio.module").then((m) => m.PortfolioModule),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
