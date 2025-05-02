import { Component } from "@angular/core";
import { Experience, Languages } from "../../models/interfaces";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"],
})
export class WorkExperienceComponent {
  public title: string = "resume.title";
  public workExperience: string = "resume.workExperience.title";
  public education: string = "resume.education.title";
  public languages: string = "resume.languages.title";
  public seeLess: string = "resume.seeLess";
  public seeMore: string = "resume.seeMore";
  public complementaryEducationTitle: string = "resume.education.complementaryTitle";

  public experiences: Experience[] = [
    {
      title: "resume.workExperience.juniorDev",
      company: "Víntegris",
      period: `2023-`,
      description: "resume.workExperience.vintegrisFront",
    },
    {
      title: "resume.workExperience.graphicDesignerWeb",
      company: "Víntegris",
      period: "2020-2023",
      description: "resume.workExperience.vintegris",
    },
    {
      title: "resume.workExperience.graphicDesignerWeb",
      company: "Media Motive",
      period: "2019-2020",
      description: "resume.workExperience.mediaMotive",
    },
    {
      title: "resume.workExperience.graphicWebIllustration",
      company: "Freelance",
      period: "2018-2019",
      description: "resume.workExperience.freelance",
    },
    {
      title: "resume.workExperience.graphicDesignerIllustration",
      company: "Herder Editorial",
      period: "2017",
      description: "resume.workExperience.herder",
    },
    {
      title: "resume.workExperience.graphicDesignerIllustration",
      company: "Xaniño, Comunicación Gráfica",
      period: "2016",
      description: "resume.workExperience.xanino",
    },
  ];

  public educationExperiences: Experience[] = [
    {
      title: "resume.education.certProf",
      period: "2019",
      institution: "Training Tutor",
    },
    {
      title: "resume.education.cfgs",
      period: "2014-2016",
      institution: "EASD Pablo Picasso",
    },
    {
      title: "resume.education.degree",
      period: "2010-2014",
      institution: "Universidade de Vigo",
    },
  ];

  public complementaryEducation: Experience[] = [
    {
      title: "resume.education.illustration",
      period: "2019",
      institution: "CIFO L'Hospitalet",
    },
    {
      title: "resume.education.illustration",
      period: "2019",
      institution: "CIFO L'Hospitalet",
    },
    {
      title: "resume.education.illustration",
      period: "2019",
      institution: "CIFO L'Hospitalet",
    },
  ];

  public languagesList: Languages[] = [
    { language: "resume.languages.spanishGalician", level: "resume.languages.native" },
    { language: "resume.languages.english", level: "resume.languages.mediumHigh" },
    { language: "resume.languages.germanCatalan", level: "resume.languages.basic" },
  ];

  public isWorkExperienceExpanded: boolean = false;
  public isEducationExperienceExpanded: boolean = false;

  public toggleWorkExperience(): void {
    this.isWorkExperienceExpanded = !this.isWorkExperienceExpanded;
  }

  public toggleEducationExperience(): void {
    this.isEducationExperienceExpanded = !this.isEducationExperienceExpanded;
  }
}
