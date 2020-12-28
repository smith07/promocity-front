import {FormArray, FormGroup} from "@angular/forms";



export class errorForm {
  public errorsForm : any = {
    shop: null,
    product: null,
    newPrice :null,

    oldPrice :null,
    endDate : null,
    currency:null,
    images:[]
  }

  public errorsMessage = {
    shop : {
      required : 'shop required'
    },
    product:{
      required : 'product required'
    },
    newPrice:{
      required : 'newPrice required'
    },
    oldPrice: {
      required : 'oldPrice required'

    },
    endDate: {
      required : 'endDate required'
    },
    currency: {
      required : 'currency required'
    },
    images : {
      required : 'image required'
    }
  }

  public resetErrorsForm(): void {
    this.errorsForm.shop=null;
    this.errorsForm.product=null;
    this.errorsForm.newPrice=null;
    this.errorsForm.oldPrice = null;
    this.errorsForm.endDate=null;
    this.errorsForm.currency=null;
    this.errorsForm.images=[];
  }

  public setErrorsForm(form: FormGroup): void {
    for(let keyControl in this.errorsForm){
      let currentErrorMessage = this.errorsMessage[keyControl];
      let control = form.get(keyControl);
      if( control && control.invalid ){
        for(let keyError in control.errors){
          this.errorsForm[keyControl] = currentErrorMessage[keyError];
        }
      }
    }

    for(let control of (<FormArray> form.get('images')).controls){
      if(control && control.invalid){
        this.errorsForm['images'].push(this.errorsMessage['images']['required']) ;
      }else {
        this.errorsForm['images'].push(null);
      }
    }
  }

}

