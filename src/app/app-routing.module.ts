import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'shopping', loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule)},
  {path: 'count', loadChildren: () => import('./count/count.module').then(m => m.CountModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
