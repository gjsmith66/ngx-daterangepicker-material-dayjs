import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ngx-daterangepicker-material';
  selected = {startDate: moment("2018-03-15T21:00:00.000Z"), endDate: moment("2018-04-23T20:59:59.000Z") };
}