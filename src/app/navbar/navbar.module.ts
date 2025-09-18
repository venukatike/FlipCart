import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuPipe } from './venu.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { Oka } from './Oka.pipe';



@NgModule({
  declarations: [ NavbarComponent,Oka  // for non stand alone components 
    ],
  imports: [
    CommonModule,VenuPipe  // for Standalone components
  ],
})
export class NavbarModule { }
