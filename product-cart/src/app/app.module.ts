import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductcartComponent} from './productcart/productcart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ProductcartComponent]
})
export class ProductCartModule {
  constructor(private injector: Injector) {
    const productcart = createCustomElement(ProductcartComponent, {injector});
    customElements.define('product-cart', productcart);
  }

  ngDoBootstrap() {
  }
}
