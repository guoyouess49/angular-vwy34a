import { Component ,OnInit} from '@angular/core';
import {Product, products} from '../products'
import { ActivatedRoute } from '@angular/router';
import {C}

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {

  product: Product | undefined;
  products = products

constructor(private route: ActivatedRoute) { }

ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
}


}