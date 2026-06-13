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
      period: "2023-",
      description: [
        "resume.workExperience.vintegrisFront.pointOne",
        "resume.workExperience.vintegrisFront.pointTwo",
        "resume.workExperience.vintegrisFront.pointThree",
      ],
    },
    {
      title: "resume.workExperience.graphicDesignerDigital",
      company: "Víntegris",
      period: "2020-2023",
      description: [
        "resume.workExperience.vintegris.pointOne",
        "resume.workExperience.vintegris.pointTwo",
        "resume.workExperience.vintegris.pointThree",
        "resume.workExperience.vintegris.pointFour",
      ],
    },
    {
      title: "resume.workExperience.graphicDesignerWeb",
      company: "Media Motive",
      period: "2019-2020",
      description: [
        "resume.workExperience.mediaMotive.pointOne",
        "resume.workExperience.mediaMotive.pointTwo",
        "resume.workExperience.mediaMotive.pointThree",
      ],
    },
    {
      title: "resume.workExperience.graphicWebIllustration",
      company: "Freelance",
      period: "2018-2019",
      description: [
        "resume.workExperience.freelance.pointOne",
        "resume.workExperience.freelance.pointTwo",
        "resume.workExperience.freelance.pointThree",
        "resume.workExperience.freelance.pointFour",
      ],
    },
    {
      title: "resume.workExperience.graphicDesignerIllustration",
      company: "Herder Editorial",
      period: "2017",
      description: [
        "resume.workExperience.herder.pointOne",
        "resume.workExperience.herder.pointTwo",
        "resume.workExperience.herder.pointThree",
      ],
    },
    {
      title: "resume.workExperience.graphicDesignerIllustration",
      company: "Xaniño, Comunicación Gráfica",
      period: "2016",
      description: ["resume.workExperience.xanino.pointOne", "resume.workExperience.xanino.pointTwo"],
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
      period: "2018",
      institution: "CIFO L'Hospitalet",
    },
    {
      title: "resume.education.typographic",
      period: "2018",
      institution: "CIFO L'Hospitalet",
    },
    {
      title: "resume.education.labDig",
      period: "2017",
      institution: "Tantágora",
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
