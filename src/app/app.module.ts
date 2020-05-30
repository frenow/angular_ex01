import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { pageTitle } from "./pageTitle/pageTitle.component";
import { formSearch } from "./formSearch/formSearch.component";
import { thumbMovie } from "./thumbMovie/thumbMovie.component";

@NgModule({
  declarations: [AppComponent, pageTitle, formSearch, thumbMovie],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
