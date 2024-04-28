/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehiculoListComponent } from './vehiculo-list.component';
import { Vehiculo } from '../vehiculo';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from '../vehiculo.service';


describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ VehiculoListComponent ],
      providers:[ VehiculoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;
    for(let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(i,"Marca "+i,"Linea "+i,"",200+i,i+100,"","");
      component.vehiculos.push(vehiculo);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('crear componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener 3 elementos', () => {
    expect(debug.queryAll(By.css('.styled-table tbody tr'))).toHaveSize(3)
  });

  it('Probar cabeceras', () =>{
    const tableHead = fixture.debugElement.query(By.css('.styled-table thead'));
    expect(tableHead).toBeTruthy();
  
    const headerCells = tableHead.queryAll(By.css('th'));
    expect(headerCells.length).toBe(4); // Asegurarse de que haya 4 celdas de encabezado
    expect(headerCells[0].nativeElement.textContent).toContain('#');
    expect(headerCells[1].nativeElement.textContent).toContain('Marca');
    expect(headerCells[2].nativeElement.textContent).toContain('Linea');
    expect(headerCells[3].nativeElement.textContent).toContain('Modelo');
  }

  );
  

});
