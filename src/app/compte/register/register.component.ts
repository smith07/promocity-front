import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import { ErrorFormRegister} from "./error_form-register";
import {User} from "../../model/user";
import {Address} from "../../model/address";
import {CompteServiceService} from "../../services/compte-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private user:User = new User(null,null,null,null
  ,[]);
  private errorFormRegister: ErrorFormRegister = new ErrorFormRegister();
  private form: FormGroup;
  constructor(private compteService: CompteServiceService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email : new FormControl('', [Validators.email]),
      lastName: new FormControl('', [Validators.pattern('[a-zA-Z]+')]),
      firstName: new FormControl('', [Validators.pattern('[a-zA-Z]+')]),
      addresses : new FormArray([]),
      password: new FormControl('', Validators.required),
      confirmPassword : new FormControl(''),
    }, this.passwordMatch());
    this.form.statusChanges.subscribe(()=>{
      this.errorFormRegister.resetErrorsForm();
      this.errorFormRegister.setErrorsForm(this.form);
    });
  }

  private addAddress(): void{
    (<FormArray> this.form.get('addresses')).push(new FormControl('', Validators.required));
  }

  passwordMatch(): ValidatorFn {
    return (group: FormGroup): ValidationErrors | null => {
      return group.get('password').value != group.get('confirmPassword').value ? {mailNoMatch : true}
      : null;
    }
  }

  private submit() : void{
    this.valueFormToUser();
    console.log(this.user);
    this.compteService.register(this.user);

}

private  valueFormToUser(): void{
  this.user.mail= this.form.value.email;
  this.user.lastName= this.form.value.lastName;
  this.user.firstName= this.form.value.firstName;
  this.user.password = this.form.value.password;
  this.form.value.addresses.forEach(address =>{
    this.user.addresses.push(new Address(address));
  })

}


}
