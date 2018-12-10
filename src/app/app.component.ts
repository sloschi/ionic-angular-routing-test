import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: "home"
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: "list"
    },
    {
      title: "Objects",
      url: "/objects",
      icon: "list"
    }
  ];

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {});
  }
}
