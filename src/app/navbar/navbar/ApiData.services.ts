import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({  //Step 2 : Define with Injectable decorator
    providedIn:"root"  // Step 3 : make it dependency injection level for root level of the application
})

export class ApiData { //Step 1 : create a class 

    constructor(private http:HttpClient){ //Step 4 : create an Constructor 
         // Step 6 inject HttpClient in constructor
    }

    get():Observable<any>{  // Step 7 : write an method with Observable
     return this.http.get('https://jsonplaceholder.typicode.com/posts');  // Step 8 : return the results
    }

}