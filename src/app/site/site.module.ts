import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    SiteComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SiteModule { }
