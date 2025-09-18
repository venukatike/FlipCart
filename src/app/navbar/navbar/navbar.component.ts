import { Component, OnInit } from '@angular/core';
import { NavbarModule } from '../navbar.module';
import { ApiData } from './ApiData.services';



@Component({
  selector: 'app-navbar',
 // imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone:false
})
export class NavbarComponent{
ego:any;
 
  constructor(private api: ApiData){ // step 9 : inject in constructor

  }
submit()
{
  this.api.get().subscribe( // step 10 : subsribe the method 
  results =>
    {
   this.ego = results
  console.log(this.ego);
    });
  }
  clear(){
    this.ego=null;
  }
}