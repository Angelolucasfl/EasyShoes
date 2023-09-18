import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private service: OrderDetailsService) { }

  shoeData: any;
  ngOnInit(): void{
      this.shoeData = this.service.Shoes;
  }
}
