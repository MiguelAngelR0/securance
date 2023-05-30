import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,MatButtonModule,MatIconModule
  ],exports:[FooterComponent]
})
export class FooterModule { }
