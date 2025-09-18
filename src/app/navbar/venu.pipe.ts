import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'Venu',
  pure:true,
  //standalone:false 
  //making here standalone component false because V.19 made stan alone component default true
})
export class VenuPipe implements PipeTransform{
  transform(value: any) {
      return "Eede ra Pipe";
  }

}