import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/auth-service/storage-service/storage.service';
import { AuthService } from 'src/app/auth-services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validate:FormGroup;
  constructor(private authservice:AuthService,private router:Router,private http:HttpClient){
  }
  ngOnInit(){
    this.validate=new FormGroup({
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }

  Login(){
    this.authservice.login(this.validate.value).subscribe((res)=>{console.log(res);
      if(res.userid!=null){
        const user={
          id:res.userid,
          role:res.userRole
        }
        console.log(user);
        StorageService.saveToken(res.jwt);
        StorageService.saveUser(user);
        if(StorageService.isAdminLoggedIn()){
          this.router.navigateByUrl("admin/dashboard");
        }
        else if(StorageService.isCustomerLoggedIn()){
          this.router.navigateByUrl("customer/dashboard")
        }
      }else{
        console.log("Bad credentials");
         
      }
    })
  }
register(){
  this.router.navigateByUrl('/signup');
}
} 
