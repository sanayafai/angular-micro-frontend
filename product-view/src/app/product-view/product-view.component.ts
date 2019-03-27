import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: "product-view",
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductViewComponent implements OnInit {

  _message: string;

  public productlist: any[] = [
    {
      productname: 'JBL Flip 4',
      code: 'cat1-0001',
      price: 18.01,
      cartprice: 0,
      available: 10,
      qty: 0
    }, {
      productname: 'Bose Sound Link',
      code: 'cat1-0010',
      price: 129.05,
      cartprice: 0,
      available: 9,
      qty: 0
    }, {
      productname: 'AB Portable',
      code: 'cat1-0008',
      price: 19.78,
      cartprice: 0,
      available: 11,
      qty: 0
    }, {
      productname: 'AE-9 Portable',
      code: 'cat1-0011',
      price: 299.99,
      cartprice: 0,
      available: 8,
      qty: 0
    }, {
      productname: 'JBL Pulse 3',
      code: 'cat1-0009',
      price: 23.05,
      cartprice: 0,
      available: 10,
      qty: 0
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }


  @Input()
  set message(message: string) {
    let productObj = message;
    for (let product of this.productlist) {
      if (product.productname === productObj['productname']) {
        product.qty = productObj['qty'];
        break;
      }
    }

  }

  get message(): string {
    return this._message;
  }

  public addToCart(product) {
    if (product.qty === product.available) {
      console.log('Product is out of Stock.');
    } else {
      product.qty = product.qty + 1;
      const productcartele = document.querySelector('product-cart');
      if (productcartele != null) {
        productcartele['message'] = product;
      }
    }
  }


}
