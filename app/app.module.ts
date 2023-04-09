import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [BrowserModule, CommonModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
