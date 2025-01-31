import { Component } from '@angular/core';
import { ProjectKService } from '../project-k.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(public dataService: ProjectKService) {}

  ngOnInit() {
    this.dataService.currentData.subscribe((data) => {
      if (data != null && !this.dataService.myCart.includes(data)) {
        this.dataService.myCart.push(data);
        console.log('this.dataService.myCart', this.dataService.myCart);
      }
    });
  }

  public removeitemFromcart(item: any) {
    console.log('removed', item);
    this.dataService.myCart.splice(item, 1);
  }
}
