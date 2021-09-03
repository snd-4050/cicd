import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site.component';

const routes: Routes = [
  {
    path:'',component:SiteComponent,children:
    [
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
