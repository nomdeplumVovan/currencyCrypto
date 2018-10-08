import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  @Input() appDelay: string;

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

  ngOnInit() {
    this.view.createEmbeddedView(this.template);
  }

}
