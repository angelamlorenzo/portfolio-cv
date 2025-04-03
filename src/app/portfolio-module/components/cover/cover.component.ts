import { Component, OnInit, OnDestroy } from "@angular/core";
import { TypewriterService } from "../../services/typewriter-service.service";
import { BehaviorSubject, Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-cover",
  templateUrl: "./cover.component.html",
  styleUrls: ["./cover.component.scss"],
})
export class CoverComponent implements OnInit, OnDestroy {
  public typedText: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public hello: string = "cover.hello";
  public introduction: string = "cover.introduction";
  public andIm: string = "cover.andIm";
  private titlesEn: string[] = ["Front End Developer", "Graphic Designer", "Publishing Creative"];
  private titlesEs: string[] = ["Desarrolladora Front End", "Diseñadora Gráfica", "Creativa Editorial"];
  private subscription = new Subscription();

  constructor(private typewriterService: TypewriterService, private translate: TranslateService) {}

  ngOnInit() {
    this.loadTypedText();
    this.subscription.add(this.translate.onLangChange.subscribe(() => this.loadTypedText()));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private loadTypedText() {
    this.subscription.unsubscribe();
    this.subscription = new Subscription();

    this.typedText.next("");

    const currentLang = this.translate.currentLang || "en";
    const titles = currentLang === "es" ? this.titlesEs : this.titlesEn;

    setTimeout(() => {
      const newSubscription = this.typewriterService.getTypewriterEffect(titles).subscribe((text) => {
        this.typedText.next(text);
      });

      this.subscription.add(newSubscription);
    }, 200);
  }
}
