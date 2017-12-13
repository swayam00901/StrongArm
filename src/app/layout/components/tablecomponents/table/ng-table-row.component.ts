import { Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef, OnChanges } from '@angular/core';

@Component({
  selector: 'ng-table-row',
  template: `<div #rowTarget></div>`
})
export class NgTableRowComponent implements OnChanges{
  @ViewChild('rowTarget', {read: ViewContainerRef}) rowTarget:any;
  @Input()rowComponent : any;
  @Input()rowInputs : any = {};
  cmpRef:ComponentRef<any>;
  private isViewInitialized:boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler, private cdRef:ChangeDetectorRef) {}

  updateComponent() {
    if(!this.isViewInitialized) {
      return;
    }
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }

    let factory = this.componentFactoryResolver.resolveComponentFactory(this.rowComponent);
    this.cmpRef = this.rowTarget.createComponent(factory);
    for (let input in this.rowInputs) {
        if (this.rowInputs.hasOwnProperty(input)) {
          this.cmpRef.instance[input] = this.rowInputs[input];
        }
      }
    this.cdRef.detectChanges();
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}



/** WEBPACK FOOTER **
 ** ./components/table/ng-table-row.component.ts
 **/