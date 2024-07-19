import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth-service/storage-service/storage.service';


const BASIC_URL=["http://localhost:8080/"];


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllImages(): Observable<any[]> {
    return this.http.get<any[]>(BASIC_URL+'admin/images');
  }

  private productId: string;

  setProductId(productId: string) {
    this.productId = productId;
  }

  getProductId(): string {
    return this.productId;
  }
  searchItem(keyword: string): Observable<any> {
    // Use an object to include the query parameter
    const params = { keyword: keyword };
    return this.http.get<any>(BASIC_URL+'admin/search', { params: params });
  }
  getImageUrl(imageId: string): string {
    return `http://localhost:8080/admin/${imageId}`;
  }
  
  uploadImage(imageFile: File, name: string,description:string) {
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('name', name);
    formData.append('description', description);
    return this.http.post('http://localhost:8080/admin/upload', formData);
  }

  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders=new HttpHeaders();
    return authHeaders.set(
      "Authorization","Bearer"+StorageService.getToken()
    )
  }
}
