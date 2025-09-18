import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuPipe } from './venu.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { Oka } from './Oka.pipe';
import { ApiData } from './navbar/ApiData.services';

import { RouterModule } from '@angular/router';
import { NavbarRoutingModule } from './navbar-routing.module';



@NgModule({
  declarations: [ NavbarComponent,Oka// for non stand alone components 
    ],
  imports: [
    CommonModule,VenuPipe,NavbarRoutingModule  // for Standalone components
  ],
  exports:[NavbarComponent]

})
export class NavbarModule { }
