import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardComponent} from './card/card.component';
import { CardInfoComponent } from './cardInfo/cardInfo.component';
import { MainComponent } from './main/main.component';
import {ModalWindowComponent} from './modalWindow/modalWindow.component'

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'card/:id', component: CardInfoComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalWindowComponent,
    CardInfoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
