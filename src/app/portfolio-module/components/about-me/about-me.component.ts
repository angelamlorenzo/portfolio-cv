import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent {
  constructor(private translate: TranslateService) {}

  public resume(): void {
    const pdfCv =
      this.translate.currentLang === "en" ? "assets/documents/angelamlorenzo_resume.pdf" : "assets/documents/angelamlorenzo_cv.pdf";
    window.open(pdfCv, "_blank");
  }

  public openLinkedIn(): void {
    window.open("https://www.linkedin.com/in/angela-m-lorenzo", "_blank");
  }

  public openMail(): void {
    window.location.href = "mailto:angelamlorenzo@gmail.com";
  }
}
