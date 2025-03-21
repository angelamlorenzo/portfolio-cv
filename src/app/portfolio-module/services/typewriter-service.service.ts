import { Injectable } from "@angular/core";
import { concat, from, interval, of } from "rxjs";
import { concatMap, delay, ignoreElements, map, repeat, take } from "rxjs/operators";
import { ITypeParams } from "../models/interfaces";

@Injectable({
  providedIn: "root",
})
export class TypewriterService {
  public type({ word, speed, deleting = false }: ITypeParams) {
    return interval(speed).pipe(
      map((x) => {
        if (deleting) {
          return word.substring(0, word.length - x);
        } else {
          return word.substring(0, x + 1);
        }
      }),
      take(deleting ? word.length + 1 : word.length)
    );
  }

  public typeEffect(word: string) {
    const forward = this.type({ word, speed: 50 });
    const backward = this.type({ word, speed: 30, deleting: true });

    return concat(forward, of("").pipe(delay(1200), ignoreElements()), backward, of("").pipe(delay(300), ignoreElements()));
  }

  public getTypewriterEffect(titles: string[]) {
    return from(titles).pipe(
      concatMap((title) => this.typeEffect(title)),
      repeat()
    );
  }
}
