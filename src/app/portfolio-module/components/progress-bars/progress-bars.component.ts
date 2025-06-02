import { Component } from "@angular/core";
import { IProgressBar } from "../../models/interfaces";

@Component({
  selector: "app-progress-bars",
  templateUrl: "./progress-bars.component.html",
  styleUrls: ["./progress-bars.component.scss"],
})
export class ProgressBarsComponent {
  public title: string = "skills.title";

  public skillsDev: IProgressBar[] = [
    { percent: 95, skill: "HTML" },
    { percent: 80, skill: "CSS" },
    { percent: 90, skill: "Bootstrap" },
    { percent: 75, skill: "TypeScript" },
    { percent: 85, skill: "Angular" },
  ];

  public skillsDesign: IProgressBar[] = [
    { percent: 80, skill: "Adobe Photoshop" },
    { percent: 90, skill: "Adobe Illustrator" },
    { percent: 90, skill: "Adobe InDesign" },
    { percent: 70, skill: "Figma" },
    { percent: 85, skill: "WordPress" },
  ];
}
