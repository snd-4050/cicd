import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./site/site.module').then(m => m.SiteModule)

  },
  {
    path: 'site', loadChildren: () => import('./site/site.module').then(m => m.SiteModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
