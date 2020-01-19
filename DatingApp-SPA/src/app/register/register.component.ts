import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};

  constructor() { }

  ngOnInit() {
  }

  register()  {
    console.log(this.model);
  }

  cancel()  {
    console.log('cancel');
  }

}
