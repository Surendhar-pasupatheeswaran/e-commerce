import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth-services/auth-service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private service:AuthService,private fb:FormBuilder){}
  validateForm:FormGroup;
  
  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirmValidator: true };
    }
    return {};
  };
  
  
  
  ngOnInit(){
    this.validateForm=this.fb.group({
      email:["",[Validators.email,Validators.required]],
      password:["",Validators.required],
      checkpassword:["",[Validators.required,this.confirmValidator]],
      username:["",[Validators.required,Validators.minLength(10),Validators.maxLength(30)]]
    })
  }
     register(){
      this.service.signup(this.validateForm.value).subscribe((res)=>{console.log(res);
     if(res.id!=null){
      alert("Success you're registered succesfully");
    }
    
      })
     }
  

}
