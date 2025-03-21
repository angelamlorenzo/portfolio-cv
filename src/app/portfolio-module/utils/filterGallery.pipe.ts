import { Pipe, PipeTransform } from "@angular/core";
import { IGallery } from "../models/interfaces";

@Pipe({
  name: "filterGallery",
})
export class filterGalleryPipe implements PipeTransform {
  transform(photos: IGallery[], sortKey: string): any {
    return photos.filter((photo) => photo.category === sortKey);
  }
}
