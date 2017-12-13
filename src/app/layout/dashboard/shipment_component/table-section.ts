import { Component } from '@angular/core';
declare var require: any;
// webpack html imports




@Component({
  selector: 'table-section',
  template: require('./table-section.html')
})
export class TableSectionComponent {
  public name:string = 'Table';

}
