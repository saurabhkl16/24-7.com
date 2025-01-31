import { Component } from '@angular/core';
import { ProjectKService } from '../project-k.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public homePageData: any;
  public showSpinner: boolean = true;

  constructor(private service: ProjectKService, private router: Router) {}

  ngOnInit() {
    this.showSpinner = true;
    this.service.getHomePageData().subscribe((data: any) => {
      this.homePageData = data;
      if (this.homePageData.length > 0) {
        this.showSpinner = false;
      }
    });
  }

  public openFullProduct(selectedProduct: any) {
    this.service.selectedProductInfo.update((products) => [selectedProduct]);
    this.router.navigate(['/product-info']);
  }
}
