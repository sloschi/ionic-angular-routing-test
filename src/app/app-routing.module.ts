import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ObjectsPage } from "./objects/objects.page";
import { DashboardPage } from "./dashboard/dashboard.page";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  { path: "tasks", loadChildren: "./tasks/tasks.module#TasksPageModule" },
  {
    path: "objects",
    loadChildren: "./objects/objects.module#ObjectsPageModule"
  },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardPageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
