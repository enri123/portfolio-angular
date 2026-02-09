import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  imports: [],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css',
})
export class Portafolio {

  public currentCheckbox(option: string){
  const elementos = document.getElementsByClassName(option);
  Array.from(elementos).forEach((el) => {
    el.classList.toggle('oculto');
  })
    console.log(option);
  }
}
