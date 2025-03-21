import { Component } from "@angular/core";
import { IProgressBar } from "../../models/interfaces";

@Component({
  selector: "app-progress-bars",
  templateUrl: "./progress-bars.component.html",
  styleUrls: ["./progress-bars.component.scss"],
})
export class ProgressBarsComponent {
  public progressBar: IProgressBar[] = [
    { percent: 50, skill: "Lorem ipsum" },
    { percent: 70, skill: "Dolor sit amet" },
    { percent: 85, skill: "Consectetur adipiscing" },
    { percent: 40, skill: "Elit sed do" },
  ];
}
