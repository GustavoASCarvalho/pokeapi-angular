import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PokemonCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PokemonCardComponent
  ]
})
export class SharedModule { }
