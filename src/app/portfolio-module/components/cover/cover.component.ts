import { Component, OnInit, OnDestroy } from "@angular/core";
import { TypewriterService } from "../../services/typewriter-service.service";
import { BehaviorSubject, Subscription } from "rxjs";
import { TranslateService, LangChangeEvent } from "@ngx-translate/core";

@Component({
  selector: "app-cover",
  templateUrl: "./cover.component.html",
  styleUrls: ["./cover.component.scss"],
})
export class CoverComponent implements OnInit, OnDestroy {
  public typedText = new BehaviorSubject<string>("");
  public finishedTyping = false;

  private titlesEn = ["Front End Developer", "Graphic Designer", "Publishing Creative"];
  private titlesEs = ["Desarrolladora Front End", "Diseñadora Gráfica", "Creativa Editorial"];

  private typewriterSub = new Subscription();
  private langChangeSub = new Subscription();

  constructor(private typewriterService: TypewriterService, private translate: TranslateService) {}

  ngOnInit() {
    this.loadTypedText(this.translate.currentLang);

    this.langChangeSub = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTypedText(event.lang);
    });
  }

  ngOnDestroy() {
    this.langChangeSub.unsubscribe();
  }

  private loadTypedText(lang: string) {
    this.typewriterSub.unsubscribe();
    this.typedText.next("");
    this.finishedTyping = false;

    const titles = lang === "es" ? this.titlesEs : this.titlesEn;

    setTimeout(() => {
      this.typewriterSub = this.typewriterService.getTypewriterEffect(titles).subscribe({
        next: (text) => this.typedText.next(text),
        complete: () => (this.finishedTyping = true),
      });
    }, 200);
  }
}
