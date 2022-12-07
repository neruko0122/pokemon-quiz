import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/shared/services/data.service";
import { GetImageUrlService } from "src/app/shared/services/get-image-url.service";

@Component({
  selector: "app-zukan",
  templateUrl: "./zukan.component.html",
  styleUrls: ["./zukan.component.scss"]
})
export class ZukanComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private getImageUrlService: GetImageUrlService
  ) {}

  pokemonData!: any;

  ngOnInit(): void {
    this.dataService.import().subscribe(json => {
      this.pokemonData = json;
    });
  }

  goBack() {
    this.router.navigate(["/top"]);
  }

  getImageUrl(pokemon) {
    return this.getImageUrlService.getImageUrl(pokemon);
  }

  getDetail(index) {
    this.router.navigate(["/zukan-detail", index]);
  }
}
