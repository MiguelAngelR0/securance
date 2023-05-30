
import { Component, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { DateAdapter } from '@angular/material/core';
import { MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';

import { DatePipe } from '@angular/common';





const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-buscador-polizas',
  templateUrl: './buscador-polizas.component.html',
  styleUrls: ['./buscador-polizas.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})


export class BuscadorPolizasComponent {
  keywords = [''];
  formControl = new FormControl(['angular']);
  myForm: FormGroup;
  selectedDate!: Date;
  selectedEndDate!: Date;

  chipsList: string[];

  filtro = '';
  
  //emito el array de parametros de busqueda al componente padre "buscador polizas page"
  @Output() arrayEnviado = new EventEmitter<any[]>();

  enviarArray(): void {
    console.log("array que emito", this.keywords)
    const miArray = this.keywords;
    this.arrayEnviado.emit(this.myForm.value);
  }



  constructor(private dateAdapter: DateAdapter<Date>, private datePipe: DatePipe) {
    this.dateAdapter.setLocale('es');

    
    

    this.myForm = new FormGroup({
      busqueda: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', [Validators.required])      
    });

    this.chipsList = [];
    console.log('estas son mis chips', this.chipsList)


  }
 




  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  addDate(date: Date) {
  
    const formattedDate = this.dateAdapter.format(date, 'DD/MM/YYYY');
    
    let encontrado = false;
    console.log('empieza',encontrado)

    for (let i = 0; i < this.keywords.length; i++) {
       
       if (formattedDate == this.keywords[i]) {
        encontrado = !encontrado;
        console.log('encontrado',encontrado)
      }
      
    }

    console.log('fecha comienzo',formattedDate)
    

    if(!encontrado ){
      this.keywords.push(formattedDate);
     }


  }

  addEndDate(date: Date) {
    
    const formattedDate = this.dateAdapter.format(date, 'DD/MM/YYYY');

    this.keywords.push(formattedDate);


  }



  add(event: MatChipInputEvent): void {
    
    const value = (event.value || '').trim();
    console.log(value)
    let encontrado = false;
    

    for (let i = 0; i < this.keywords.length; i++) {
       
       if (value == this.keywords[i]) {
        encontrado = !encontrado;
        
      }
      
    }

  
   if(!encontrado){
    this.keywords.push(value);

   
   }
    
    event.chipInput!.clear();

  }

  limpiarFiltro(){
    this.keywords= []
  }


  

}

