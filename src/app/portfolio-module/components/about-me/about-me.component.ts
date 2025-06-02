import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent {
  public title: string = "aboutMe.title";
  public paragraphOne: string = "aboutMe.paragraphOne";
  public paragraphTwo: string = "aboutMe.paragraphTwo";
  public buttonCv: string = "aboutMe.downloadCvButton";
  public linkedIn: string = "https://www.linkedin.com/in/angela-m-lorenzo";
  public email: string = "mailto:angelamlorenzo@gmail.com";

  constructor(private translate: TranslateService) {}

  public resume(): void {
    const lang = this.translate.currentLang || "en";
    const pdfCv = lang === "es" ? "assets/documents/angelamlorenzo_cv.pdf" : "assets/documents/angelamlorenzo_resume.pdf";
    window.open(pdfCv, "_blank");
  }

  public openLinkedIn(): void {
    window.open(this.linkedIn, "_blank");
  }

  public openMail(): void {
    window.location.href = this.email;
  }
}
