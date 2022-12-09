import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadprodPageRoutingModule } from './cadprod-routing.module';

import { CadprodPage } from './cadprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CadprodPageRoutingModule
  ],
  declarations: [CadprodPage]
})
export class CadprodPageModule {}
