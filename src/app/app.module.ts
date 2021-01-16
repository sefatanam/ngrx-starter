import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {CounterComponent} from './count/counter/counter.component';
import {ShoppingReducer} from './core/store/reducers/shopping.reducer';
import {FormsModule} from '@angular/forms';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from './core/interceptors/api-interceptor.interceptor';
import {EffectsModule} from '@ngrx/effects';
import {ShoppingEffects} from './core/store/effects/ShoppingEffects';
import {counterReducer} from './core/store/reducers/counter.reducer';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({count: counterReducer, shopping: ShoppingReducer}),
    EffectsModule.forRoot([ShoppingEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    SharedModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
