import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-object-list",
  templateUrl: "./object-list.component.html",
  styleUrls: ["./object-list.component.scss"]
})
export class ObjectListComponent implements OnInit {
  public elements: string[] = [];

  constructor() {
    this.elements = ["Object 1", "Object 2", "Object 3"];
  }

  ngOnInit() {}
}
