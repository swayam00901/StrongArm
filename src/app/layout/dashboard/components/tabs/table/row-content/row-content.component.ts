import { Component, Input } from '@angular/core';


@Component({
  selector: 'thing',
  template: `
  <div class="container">
  <h2>Dynamicly Rendered Component</h2>
  <p>This component was built by the table component</p>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>First Input</th>
        <th>Second Input</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{things}}</td>
        <td>{{otherThings}}</td>
      </tr>
    </tbody>
  </table>
</div>`
})
export class RowContentComponent {
  @Input() things:any = {};
  @Input() otherThings: any = {};
  constructor() { }

}