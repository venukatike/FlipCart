import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuPipe } from './venu.pipe';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [ NavbarComponent   // for non stand alone components 
    ],
  imports: [
    CommonModule,VenuPipe  // for Standalone components
  ],
})
export class NavbarModule { }
