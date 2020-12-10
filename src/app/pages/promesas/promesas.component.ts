import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { 

    //this.contar().then(
    //  mensaje => console.log('Termino: ',mensaje)
    //).catch(error => console.error('Error en promesa', error));
  }

  ngOnInit(): void {
  }

  contar(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      let contador = 0;

      let itervalo = setInterval( () => {

        contador+=1;
        console.log(contador);
        
        if(contador==3){
          resolve(true);
          clearInterval(itervalo);
        }

      },1000);

    });

  }

}
