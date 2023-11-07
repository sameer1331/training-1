import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-r-forms',
  templateUrl: './r-forms.component.html',
  styleUrls: ['./r-forms.component.scss']
})
export class RFormsComponent implements OnInit {
     userForm! : FormGroup;
     formValues : any;

  
     constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.initializeForm();
  }

     initializeForm(){
      this.userForm=this.fb.group({
          name :["",[Validators.required]],
          email:[null,[Validators.required]],
          phoneno:[null,[Validators.required]]
        });
     }

     get form(){
      return this.userForm.controls;
     }



}
