import { Component, OnInit } from '@angular/core';
import * as _dayjs from 'dayjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocaleConfig } from '../../../../src/daterangepicker';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  form: FormGroup;
  form2: FormGroup;
  locale: LocaleConfig = {
    format: 'YYYY-MM-DDTHH:mm:ss.SSSSZ',
    displayFormat: 'YYYY-MM-DD',
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selected: [{
        startDate: _dayjs().subtract(3,'week'),
        endDate: _dayjs().subtract(1,'week').subtract(3,'day')
      }, Validators.required],
    });

    this.form2 = this.fb.group({
      selected: [{
        startDate: '2019-12-11T18:30:00.000Z',
        endDate: '2019-12-12T18:29:59.000Z',
      }, Validators.required],
    });
   }

  submit() {
    console.log(this.form.value);
  }

  submit2() {
    console.log(this.form2.value);
  }
  toggleDisable(form: FormGroup) {
    if (form.disabled) {
      form.enable();
    } else {
      form.disable();
    }
  }
}
