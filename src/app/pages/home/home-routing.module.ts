import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslateModule
  ],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
