import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, delay, Observable } from "rxjs";
import { IGallery, IProject } from "../models/interfaces";

@Injectable({
  providedIn: "root",
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  public selectedProject: BehaviorSubject<IProject> = new BehaviorSubject({} as IProject);
  public selectedCategory: BehaviorSubject<string> = new BehaviorSubject("Diseño Gráfico");

  public getGallery(): Observable<IGallery[]> {
    const url = "assets/data/portfolio-data.json";
    return this.http.get<IGallery[]>(url).pipe(delay(400));
  }
}
