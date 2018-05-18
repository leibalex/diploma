import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-create-new-server',
  templateUrl: './create-new-server.component.html',
  styleUrls: ['./create-new-server.component.css']
})
export class CreateNewServerComponent implements OnInit {

  addServerForm: FormGroup;
  formErrorMessage = '';
  serverErrorMessage = '';
  isSuccessCreated = false;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.addServerForm = this.formBuilder.group({
      name: [null, [
        Validators.required
      ]],
      imageRef: [null, [
        Validators.required
      ]],
      flavorRef: [null, [
        Validators.required
      ]]
    });
  }

  checkForm(): boolean {
    if (this.addServerForm.controls['name'].invalid || this.addServerForm.controls['imageRef'].invalid
      || this.addServerForm.controls['flavorRef'].invalid) {
      this.formErrorMessage = 'All fields should be fill';

      return false;
    }

    return true;
  }

  onSubmit(): void {
    if (!this.checkForm()) {
      return;
    }
  }

}
