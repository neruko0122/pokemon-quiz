import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/shared/services/data.service";
import { GetImageUrlService } from "src/app/shared/services/get-image-url.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
    private getImageUrlService: GetImageUrlService,
    private fb: FormBuilder
  ) {}

  pokemon!: any;
  index = 0;
  form: FormGroup;
  data!: any;

  ngOnInit(): void {
    this.buildForm();
    this.index = this.activatedRoute.snapshot.params.index;
    this.dataService.import().subscribe(json => {
      this.data = json;
      this.pokemon = json[this.index];
      this.form.patchValue({
        no: this.pokemon["no"],
        name: this.pokemon["name"],
        types: this.pokemon["types"],
        evolutions: this.pokemon["evolutions"],
        abilities: this.pokemon["abilities"],
        hiddenAbilities: this.pokemon["hiddenAbilities"]
      });
    });
  }

  reflesh(index) {
    this.index = index;
    this.pokemon = this.data[this.index];
    this.form.patchValue({
      no: this.pokemon["no"],
      name: this.pokemon["name"],
      types: this.pokemon["types"],
      evolutions: this.pokemon["evolutions"],
      abilities: this.pokemon["abilities"],
      hiddenAbilities: this.pokemon["hiddenAbilities"]
    });
  }

  getImageUrl(pokemon) {
    return this.getImageUrlService.getImageUrl(pokemon);
  }

  goNext(index: number) {
    index = Number(index) + 1;
    this.router.navigate(["/zukan-detail", index]);
    this.reflesh(index);
  }

  goPrev(index: number) {
    index = Number(index) - 1;
    this.router.navigate(["/zukan-detail", index]);
    this.reflesh(index);
  }

  buildForm() {
    this.form = this.fb.group({
      no: [null],
      name: [null],
      types: [null],
      evolutions: [null],
      abilities: [null],
      hiddenAbilities: [null]
    });
  }
}
