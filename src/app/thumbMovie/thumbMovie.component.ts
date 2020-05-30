import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { IMovie } from "../Movie";

@Component({
  selector: "thumb-movie",
  templateUrl: "./thumbMovie.component.html",
  styleUrls: ["./thumbMovie.component.css"]
})
export class thumbMovie implements OnInit {
  @Input("movie") movie: IMovie[];

  ngOnInit() {
    console.log(this.movie);
  }
}
