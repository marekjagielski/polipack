import { Component, OnInit }   from '@angular/core';

//export class DropdownValue {
//  value:string;
//  label:string;
//
//  constructor(value:string,label:string) {
//    this.value = value;
//    this.label = label;
//  }
//}

@Component({
  selector:    'choose-jar',
  templateUrl: 'choose-jar.component.html',
  providers:   [  ]
})
export class ChooseJarComponent implements OnInit {

//  @Input()
//  values: DropdownValue[];
//
//  @Output()
//  select: EventEmitter;
//
//  constructor() {
//    this.select = new EventEmitter();
//  }
    
  ngOnInit() {
  }

//  selectItem(value) {
//    this.select.emit(value);
//  }
    
}
