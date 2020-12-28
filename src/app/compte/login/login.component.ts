import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompteServiceService} from "../../services/compte-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private error: string;
  private form: FormGroup;
  constructor(private route: Router, private FormBuilder: FormBuilder, private compteService: CompteServiceService) { }

  ngOnInit() {
    this.form = this.FormBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    this.compteService.login(this.form.value).subscribe(
      (value) => {
        if(value != 'succes'){
          this.error = value;
        }else {
          this.route.navigate(["/promos"]);
        }
      }
    )
  }
}
