import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
  heroes:string[] = ['spiderman','iroman','hulk','thor','Capitan America'];
  heroeborrado:string = ''

  borrarHeroe(){
   this.heroeborrado = this.heroes.shift()||'';
  }
}
