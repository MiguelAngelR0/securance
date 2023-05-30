import { Component, ViewChild, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LISTA_POLIZA } from 'src/app/mock/poliza.mock';
import { IPoliza } from 'src/app/models/ipoliza';


@Component({
  selector: 'app-listado-buscador-polizas',
  templateUrl: './listado-buscador-polizas.component.html',
  styleUrls: ['./listado-buscador-polizas.component.scss']
})
export class ListadoBuscadorPolizasComponent implements OnInit {
  displayedColumns: string[] = ['poliza', 'nombreRiesgo', 'fechaIni', 'FechaVen', 'ValorPrima', 'NombreCliente'];
  dataSource = new MatTableDataSource<IPoliza>(LISTA_POLIZA);

  listaPoliza = LISTA_POLIZA;


  @Input() arrayRecibido!: any[];




  @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;


  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource<IPoliza>(LISTA_POLIZA);
  }

  ngOnInit(): void {
    
    // if(this.arrayRecibido.length>0){
    //   this.applyFilter(this.arrayRecibido[0])
    // }
    

    // this.applyFilter(this.listaPoliza) 
    console.log(this.arrayRecibido);
  }




  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  getRow() {
    
    this.router.navigateByUrl(`/detallePoliza/1`);
  }

  // //* aplicar  filtro 
  // applyFilter(filterValue: string) {
  //   console.log("aplica filtro", filterValue)
  //   filterValue = filterValue.trim().toLowerCase();
  
  //   if (filterValue) {
  //     this.dataSource.data = this.arrayRecibido.filter((item: IPoliza) => {
  //       // Filtra los datos en función de los criterios deseados
  //       return item.nombreRiesgo.toLowerCase().includes(filterValue) ||
  //         item.NombreCliente.toLowerCase().includes(filterValue);
  //       // Puedes agregar más condiciones según las propiedades que deseas filtrar
  //     });
  //   } else {
  //     // Si no hay filtro, muestra todos los datos
  //     this.dataSource.data = this.arrayRecibido;
  //   }
  
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  


}
