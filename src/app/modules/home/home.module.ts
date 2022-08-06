import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { FormNewsletterComponent } from './features/form-newsletter/form-newsletter.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    FormNewsletterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
