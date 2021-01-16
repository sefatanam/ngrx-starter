import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from './shared/intro/intro.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'shopping', loadChildren: () => import('./shopping/shopping.module').then(m => m.ShoppingModule)},
  {path: 'count', loadChildren: () => import('./count/count.module').then(m => m.CountModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
