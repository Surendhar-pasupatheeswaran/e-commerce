import { Component, Input } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemInterface } from '../item-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  images: any = {
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
  };

productId:String;

  showImages: boolean = true;
  keyword: string;
  searchResults: ItemInterface[];
  validateForm: FormGroup;
  searchTerm: string = '';
  filteredProducts: any[] = [];
imageId:string;
  constructor(private imageService: AdminService, private router: Router) { }

  ngOnInit() {
    this.validateForm = new FormGroup({
      keyword: new FormControl('', Validators.required) // Update with your actual form controls
    });
    this.getAllImages();
  }

  search() {
    this.imageService.searchItem(this.keyword)
      .subscribe(results => {
        this.searchResults = results;
        this.showImages = false;
      });
  }

  getAllImages() {
    this.imageService.getAllImages().subscribe(
      (response) => {
        this.images = response;
      },
      (error) => {
        console.log('Error fetching images', error);
      }
    );
  }

  getImageUrl(imageId: string): string {

    return this.imageService.getImageUrl(imageId);

  }
  viewProduct(productId: string): void {
   this.imageId=  productId;
    this.imageService.setProductId(this.imageId);
  }

  BuyProduct(productId: number) {
    this.router.navigate(['/buyproduct']);
  }

  ProductDetails(imageId: string, name: string, price: number): void {
    console.log(imageId, name, price);
  }
  

  originalPrice: number = this.images.price;
  discountedPrice: number = this.originalPrice * 0.8;
}
