import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GetImageUrlService {
  constructor() {}

  getImageUrl(pokemon): string {
    var isMegaEvolution = pokemon["isMegaEvolution"];
    var number = pokemon["no"];
    var imageUrl = "";
    if (isMegaEvolution) {
      if (number === 6 || number === 150) {
        // X/Yの振り分け
        imageUrl =
          "/assets/images/pokemon/picture/mega/" +
          this.getZeroPadding(number) +
          "_" +
          this.getFormFromName(pokemon["name"]) +
          ".png";
      } else {
        imageUrl =
          "/assets/images/pokemon/picture/mega/" +
          this.getZeroPadding(number) +
          ".png";
      }
    } else {
      imageUrl =
        "/assets/images/pokemon/picture/" +
        this.getZeroPadding(number) +
        ".png";
    }
    return imageUrl;
  }

  private getZeroPadding(number) {
    return ("000" + number).slice(-3);
  }

  private getFormFromName(name: string) {
    switch (name.slice(-1)) {
      case "X":
        return "x";
      case "Y":
        return "y";
    }
  }
}
