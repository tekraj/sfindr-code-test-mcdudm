import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { TESTFORMCONFIG } from "../core/constants/test-form-config";
import { IFormField } from "../core/interfaces/form-field";
import { ITestFormData } from "../core/interfaces/test-form-data";

@Component({
  selector: "app-test1",
  templateUrl: "./test1.component.html",
  styleUrls: ["./test1.component.css"]
})
export class Test1Component implements OnInit, OnDestroy {
  public test1FormGroup: FormGroup;
  public formFields: IFormField[] = TESTFORMCONFIG;
  private formValueChangeSubscription: Subscription[];
  private testFormData: ITestFormData;
  constructor() {
    this.test1FormGroup = new FormGroup({});
    this.formFields.forEach((f: IFormField) => {
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

    // subscribe value change of all the input fields that can add or remove input fields based on their value
    this.formValueChangeSubscription = this.formFields
      .filter(f => f.changedFields)
      .map(f => {
        return this.test1FormGroup.controls[f.name].valueChanges.subscribe(
          value => {
            // find the extra field index that is added on vehicle type value change
            const extraFieldIndex = this.formFields.findIndex(f => f.showOn);
            // it we have already added the extra field remove it from our list
            if (extraFieldIndex >= 0) {
              // remove form control from the form group
              this.test1FormGroup.removeControl(
                this.formFields[extraFieldIndex].name
              );
              // remove array
              this.formFields.splice(extraFieldIndex, 1);
            }
            if (!value) {
              return;
            }
            // if value is not empty the add new field
            const vehicleField = this.formFields.find(
              f => f.name === "vehicleType"
            );
            if (!vehicleField) {
              return;
            }
            const fieldToAdd = vehicleField.changedFields.find(
              c => c.showOn.toLocaleLowerCase() === value.toLocaleLowerCase()
            );
            if (!fieldToAdd) {
              return;
            }
            // add form control to the from group
            this.test1FormGroup.addControl(
              fieldToAdd.name,
              new FormControl(
                fieldToAdd.default,
                fieldToAdd.validations.map((v: string) => {
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
            // add new input field on from group
            this.formFields.push(fieldToAdd);
          }
        );
      });
  }

  ngOnInit() {}
  ngOnDestroy(): void {
    this.formValueChangeSubscription.forEach(s => {
      if (s) {
        s.unsubscribe();
      }
    });
  }

  submitTestForm(): void {
    this.testFormData = this.test1FormGroup.value;
    console.log(this.testFormData);
  }
}
