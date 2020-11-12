import { Component, OnInit } from '@angular/core';
const NUMS: string[] = ['0', '1', '3', '4', '5', '6', '7', '8', '9'];

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
