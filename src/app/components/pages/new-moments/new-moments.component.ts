import { Component, OnInit, Input} from '@angular/core';

import { FormGroup , FormControl, Validators } from '@angular/forms';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit {

  @Input() btnText = "Compartilhar!"
  constructor() { }

  momentForm!: FormGroup;

  ngOnInit(): void {
  }

  async createHandler(moment: Moment){
    console.log("deu bom?");
  }

}
