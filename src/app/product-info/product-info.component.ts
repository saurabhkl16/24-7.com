import { Component, signal } from '@angular/core';
import { ProjectKService } from '../project-k.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  standalone: false,

  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss',
})
export class ProductInfoComponent {
  public numberOfQuantitys = signal(1);
  public productInfo: any = {
    id: '',
    heading: '',
    price: '',
    additional_info: {
      brand: '',
      operating_system: '',
      size: '',
      cpu_speed: '',
    },
  };

  public productImagesObject: any = [
    {
      image: '',
      thumbImage: '',
      title: '',
      alt: '',
      order: 2,
    },
  ];

  constructor(private service: ProjectKService, private router: Router) {}

  ngOnInit() {
    this.productInfo.heading = this.service.selectedProductInfo()[0].title;
    this.productInfo.price = this.service.selectedProductInfo()[0].price;
    this.productInfo.id = this.service.selectedProductInfo()[0].id;
    this.productInfo['additional_info']['brand'] =
      this.service.selectedProductInfo()[0].brand;
    this.productImagesObject[0]['image'] =
      this.service.selectedProductInfo()[0].image_url;
    this.productImagesObject[0]['thumbImage'] =
      this.service.selectedProductInfo()[0].image_url;
  }

  public increaseQuantity() {
    this.numberOfQuantitys.update((value) => value + 1);
  }

  public decreaseQuantity() {
    this.numberOfQuantitys.update((value) => value - 1);
  }

  public saveItemToCart(quntity: any, product: any, imageUrl: any) {
    let cartProduct = { quantity: quntity, product: product, image: imageUrl };
    if (this.service.myCart.length === 0) {
      this.service.updateMycart(cartProduct);
      this.router.navigate(['/cart']);
    }
    this.service.myCart.filter((item: any) => {
      if (item.product.id != cartProduct.product.id) {
        this.service.updateMycart(cartProduct);
        this.router.navigate(['/cart']);
      } else if (item.product.id === cartProduct.product.id) {
        item.quantity = item.quantity + cartProduct.quantity;
        this.router.navigate(['/cart']);
      }
    });
  }
}
