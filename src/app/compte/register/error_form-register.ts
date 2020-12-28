import {FormArray, FormGroup} from "@angular/forms";

export class ErrorFormRegister{
  public errorsForm = {
    email : null,
    lastName: null,
    firstName : null,
    addresses : [],
    password : null,
    confirmPassword: null
  }

  private errorsMessage = {
    email : {
      email : 'mail invalid format'
    },
    lastName:{
      pattern : 'last name invalid format'
    },
    firstName:{
      pattern : 'first name invalid format'
    },
    password: {
      required : 'password empty'

    },
    confirmPassword: {
      mailNoMatch : 'password and confirm password not match'
    },

    addresses : {
      required : 'address required'
    }
  }

  public resetErrorsForm(): void {
    this.errorsForm.email=null;
    this.errorsForm.lastName=null;
    this.errorsForm.firstName=null;
    this.errorsForm.addresses = [];
    this.errorsForm.password=null;
    this.errorsForm.confirmPassword=null;
  }

  public setErrorsForm(form: FormGroup): void {
    if(form.invalid && form.errors){
      const mailNoMatch = form.errors['mailNoMatch'];
      if(mailNoMatch){
        this.errorsForm['confirmPassword'] = this.errorsMessage['confirmPassword']['mailNoMatch'];
      }
    }
    for(let keyControl in this.errorsForm){
      let currentErrorMessage = this.errorsMessage[keyControl];
      let control = form.get(keyControl);
      if( control && control.invalid ){
        for(let keyError in control.errors){
          this.errorsForm[keyControl] = currentErrorMessage[keyError];
        }
      }
    }

    for(let control of (<FormArray> form.get('addresses')).controls){
      if(control && control.invalid){
        this.errorsForm['addresses'].push(this.errorsMessage['addresses']['required']) ;
      }else {
        this.errorsForm['addresses'].push(null);
      }
    }
  }
}
