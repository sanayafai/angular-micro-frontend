import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductViewComponent} from './product-view/product-view.component';
import '@webcomponents/custom-elements/custom-elements.min';

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ProductViewComponent]
})
export class ProductViewModule {

  constructor(private injector: Injector) {
    const productView = createCustomElement(ProductViewComponent, {injector});
    customElements.define('product-view', productView);

  }

  ngDoBootstrap() {
  }
}
