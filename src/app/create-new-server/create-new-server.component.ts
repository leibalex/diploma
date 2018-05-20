import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { VirtualMachineService } from '../services/virtual-machine.service';
import { Router } from '@angular/router';

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

  constructor(private readonly formBuilder: FormBuilder, private readonly vmService: VirtualMachineService,
              private readonly router: Router) {}

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

    const {name, imageRef, flavorRef} = this.addServerForm.value;

    this.vmService.create(name, imageRef, flavorRef).subscribe((data) => {
      this.isSuccessCreated = true;
      this.router.navigateByUrl('/user-account');
    }, (error) => {
      this.serverErrorMessage = 'Something went wrong, try again later!';
      this.addServerForm.reset();
    });
  }

}
