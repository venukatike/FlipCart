import { Component, NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule, Routes } from "@angular/router";

 const routes:Routes =[
        {path:'',component:NavbarComponent}
    ];


@NgModule(
    {
        declarations:[],
        imports:[RouterModule.forChild(routes)],
        exports:[RouterModule]
    }
)
export class NavbarRoutingModule{
}