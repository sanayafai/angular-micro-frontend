import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductheaderComponent } from './productheader/productheader.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [ProductheaderComponent]
})
export class ProductHeaderModule {

  constructor(private injector: Injector){
    const productHeader = createCustomElement(ProductheaderComponent, { injector });
    customElements.define('product-header', productHeader);
  }
  ngDoBootstrap() {
  }
}
