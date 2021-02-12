import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { TESTFORMCONFIG } from "../core/constants/test-form-config";
import { FormField } from "../core/interfaces/form-field";

@Component({
  selector: "app-test1",
  templateUrl: "./test1.component.html",
  styleUrls: ["./test1.component.css"]
})
export class Test1Component implements OnInit, OnDestroy {
  public test1FormGroup: FormGroup;
  public formFields: FormField[] = TESTFORMCONFIG;
  private formValueChangeSubscription: Subscription;
  constructor() {
    this.test1FormGroup = new FormGroup({});
    this.formFields.forEach((f: FormField) => {
      this.test1FormGroup.addControl(
        f.name,
        new FormControl(
          f.default,
          f.validations.map((v: string) => {
            if (v === "required") {
              return Validators.required;
            } else if (v === "email") {
              return Validators.email;
            }
            return null;
            // and so on
          })
        )
      );
    });

    this.formValueChangeSubscription = this.test1FormGroup.controls['vehicleType'].valueChanges.subscribe(
      value => {
          
      }
    );
  }

  ngOnInit() {}
  ngOnDestroy(): void {
    this.formValueChangeSubscription.unsubscribe();
  }
}
