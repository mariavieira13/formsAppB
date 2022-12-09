import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadprodPage } from './cadprod.page';

const routes: Routes = [
  {
    path: '',
    component: CadprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadprodPageRoutingModule {}
