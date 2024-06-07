import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RankingService } from "src/app/shared/services/ranking.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.scss"]
})
export class RankingComponent implements OnInit {
  rankingList = [];
  constructor(private router: Router, private rankingService: RankingService) {}

  ngOnInit(): void {
    this.rankingService.findRanking().subscribe(response => {
      console.log(response);
      // this.rankingList = response.json()
    });
  }

  back() {
    this.router.navigate(["top"]);
  }
}
