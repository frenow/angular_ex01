import { Component, OnInit } from "@angular/core";

import { IMovie } from "./Movie";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  movies: IMovie[];
  initialMovies: IMovie[];
  constructor() {
    this.movies = [
      {
        name: "Batman Dark Knight",
        year: 2010,
        cover: "assets/cover/batman.PNG"
      },
      { name: "Man of Steel", year: 2013, cover: "assets/cover/homem.PNG" },
      { name: "Wonder Woman", year: 2015, cover: "assets/cover/mulher.PNG" },
      { name: "Justice League", year: 2018, cover: "assets/cover/liga.PNG" }
    ];
    this.initialMovies = this.movies;
  }

  ngOnInit() {
    console.log(this.movies);
  }
  onSearchMovie(name: string) {
    console.log(name);
    if (name == "") {
      this.movies = this.initialMovies;
    }
    this.movies = this.movies.filter(
      item => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }
}
