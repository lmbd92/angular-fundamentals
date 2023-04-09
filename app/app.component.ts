import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="">
      <h1>{{ title }}</h1>
      <h1 [innerHTML]="title"></h1>
      <button (click)="handleClick()">Change Value</button>
      <input
        type="text"
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"
      />

      <img [src]="logo" />
    </div>
  `,
})
export class AppComponent {
  title: string;
  name: string = "John";
  logo: string = "img/angular.svg";

  handleClick() {
    this.name = "Bob";
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }
  handleBlur(event: any) {
    this.name = event.target.value;
  }
  constructor() {
    this.title = "Tour of Heroes";
  }
}
