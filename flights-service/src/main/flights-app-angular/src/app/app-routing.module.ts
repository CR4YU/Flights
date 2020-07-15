import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FinderComponent} from "./main-content/finder/finder.component";


const routes: Routes = [
  { path: '', component: FinderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
