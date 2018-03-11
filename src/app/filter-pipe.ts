import {PipeTransform, Pipe} from '@angular/core'

import{Planets} from './ifsc'


@Pipe({
    name: 'planetFilter'
})

export class PlanetFilterPipe implements PipeTransform{
    transform(value: Planets[], filterBy: string): Planets[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase(): null;
        return filterBy ? value.filter((planets: Planets)=> 
            planets.name.toLocaleLowerCase().indexOf(filterBy)!=-1) : value;
    }
}