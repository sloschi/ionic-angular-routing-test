import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent implements OnInit {
  elements: string[];

  constructor() {
    this.elements = ["Task 1", "Task 2", "Task 3"];
  }

  ngOnInit() {}
}
