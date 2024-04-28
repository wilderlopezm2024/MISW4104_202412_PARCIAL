import { Component, OnInit, numberAttribute } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];

  constructor(private bookService: VehiculoService) { }

  getVehiculos(): void {
    this.bookService.getVehiculos().subscribe((vehiculos)=>{
      this.vehiculos = vehiculos;
    });
  }
  
  obtenerTotalPorMarca(marca: string): number {
    var c: number=0;
    for(let i=0; i<this.vehiculos.length;i++){
      if (this.vehiculos[i].marca==marca){
        c++;
      }
    }
    return c;
  }
  
  obtenerListaMarcas(): [string, number][] {
    
    const lista: { [marca: string]: number } = {};

    for(let i=0; i<this.vehiculos.length;i++){
      const vehiculo = this.vehiculos[i];
      if (!lista[vehiculo.marca]) {
        lista[vehiculo.marca] = this.obtenerTotalPorMarca(vehiculo.marca);
      }
    }
    const listaArray: [string, number][] = Object.entries(lista);
    return listaArray;
      
  }

  
  ngOnInit() {
    this.getVehiculos();
  }


}
