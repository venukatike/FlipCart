import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'Oka',
    standalone : false,
    pure : false //impure pipe
})
export class Oka implements PipeTransform {
    transform(value:any){
        return "Pipe Create chesina chudu mawa"
    }
}