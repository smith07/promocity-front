import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Promo} from "../../model/promo";
import {PromoServiceService} from "../../services/promo-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import { errorForm } from "./error-form";
import {Image} from "../../model/image";

@Component({
  selector: 'app-promo-add',
  templateUrl: './promo-add.component.html',
  styleUrls: ['./promo-add.component.scss']
})
export class PromoAddComponent implements OnInit {
  private form: FormGroup;
  private errorForm: errorForm = new errorForm();

  private promo: Promo = new Promo(null,null,null
    ,null,null,null,[]);

  constructor(private formBuilder: FormBuilder, private promoService: PromoServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPromoByParamUrl();
    this.form = this.formBuilder.group({
      shop: [this.promo.shop, Validators.required],
      product: [this.promo.product, Validators.required],
      newPrice :[this.promo.newPrice, Validators.required],
      oldPrice :[this.promo.oldPrice, Validators.required],
      endDate : [this.promo.endDate, Validators.required],
      currency:[this.promo.currency, Validators.required],
      images: this.formBuilder.array([])
    });
    this.promo.images.forEach((image:Image)=>{
      (<FormArray> this.form.get("images")).push(new FormControl(image.url, Validators.required));
    });

      this.form.valueChanges.subscribe(values =>{
        this.errorForm.resetErrorsForm();
        this.errorForm.setErrorsForm(this.form);
    });

  }

  addImage(): void {
    (<FormArray>this.form.get('images')).push(new FormControl('', Validators.required));
  }


  getPromoByParamUrl(): void{
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      if(paramMap.get('product')){
        this.promo = this.promoService.getPromo(paramMap.get('product'));
      }
    })
  }

  submit(): void{
    this.valueFormToPromo();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      if(this.form.valid){
        if(!paramMap.get('product')){
          this.promoService.addPromo(this.promo);
        }else {
          this.promoService.updatePromo(this.promo);
          console.log(this.promo);
        }
      }
    })
  }

  valueFormToPromo():void {
    this.promo.product= this.form.value.product;
    this.promo.shop= this.form.value.shop;
    this.promo.currency=this.form.value.currency;
    this.promo.endDate=this.form.value.endDate;
    this.promo.oldPrice=this.form.value.oldPrice;
    this.promo.newPrice= this.form.value.newPrice;
    this.promo.images = [];
    this.form.value.images.forEach((imageUrl: String) =>{
      this.promo.images.push(new Image(imageUrl));
    });
    this.router.navigate(["/promos"]);
  }
}
