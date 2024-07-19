import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent {
    
  product:string

  image:any[];
  constructor(private productService: AdminService) {}

  ngOnInit(){
   this.product=this.productService.getProductId() ;
  }

  getImageUrl(imageID:string):string{
    return this.productService.getImageUrl(imageID);
  }
 
}
