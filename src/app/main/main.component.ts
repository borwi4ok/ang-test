import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {CardInfoComponent} from '../cardInfo/cardInfo.component'


export interface ICard {
  title: string;
  content: string;
}



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  cards : ICard[] = [
    {title:'firstTitle', content:'firstContent'},
    {title:'secondTitle', content:'secondContent'},
    {title:'thirdTitle', content:'thirdContent'}
  ]


  //Trying send cards array from navigationExtras
  //need a comment
  // navigationExtras: NavigationExtras = {
  //   state: {
  //     cards : this.cards
  //   }
  // };
  
  // constructor(private router: Router){
  //   this.router.navigate(['card'], this.navigationExtras);
  // }

  toggleModalWindow = false

  cancelAddCard(){
    return this.toggleModalWindow = false
  }

  showModalWindow(){
    return this.toggleModalWindow = !this.toggleModalWindow
  }
}
