import { Component } from '@angular/core';
import { StorageService } from './auth-service/storage-service/storage.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';


  isAdminLoggedIn:boolean=StorageService.isAdminLoggedIn();
  isCustomerLoggedIn:boolean=StorageService.isCustomerLoggedIn();

  constructor(private router:Router){}

ngOnInit(){  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
    this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
  });}
  logout(){
    StorageService.signout();
    this.router.navigateByUrl("/login");
  }
}
