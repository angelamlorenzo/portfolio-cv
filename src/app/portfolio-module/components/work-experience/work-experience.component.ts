import { Component } from "@angular/core";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"],
})
export class WorkExperienceComponent {
  public isWorkExperienceExpanded: boolean = false;
  public isEducationExperienceExpanded: boolean = false;

  public toggleWorkExperience(): void {
    this.isWorkExperienceExpanded = !this.isWorkExperienceExpanded;
  }

  public toggleEducationExperience(): void {
    this.isEducationExperienceExpanded = !this.isEducationExperienceExpanded;
  }
}
