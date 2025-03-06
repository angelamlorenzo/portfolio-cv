import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./portfolio-module/pages/main-page/main-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
