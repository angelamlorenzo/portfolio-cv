import { Component } from "@angular/core";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"],
})
export class WorkExperienceComponent {
  // Variables de control para expandir o colapsar
  isWorkExperienceExpanded = false;
  isEducationExperienceExpanded = false;

  // Método para alternar la visibilidad de la experiencia laboral
  toggleWorkExperience(): void {
    this.isWorkExperienceExpanded = !this.isWorkExperienceExpanded;
  }

  // Método para alternar la visibilidad de la experiencia educativa
  toggleEducationExperience(): void {
    this.isEducationExperienceExpanded = !this.isEducationExperienceExpanded;
  }
}
