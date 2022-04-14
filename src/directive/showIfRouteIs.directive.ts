import {Directive, Attribute, Input , ElementRef , OnInit} from "@angular/core";
import {Event, NavigationEnd, Router} from "@angular/router";

@Directive({
  selector: '[showIfRouteIs]'
})

export class ShowIfRouteIsDirective implements OnInit{

  @Input('showIfRouteIs') showIfRouteIs  : any;

  constructor(private router: Router , private elementRef: ElementRef)   {}

  ngOnInit(): void {
    if (this.showIfRouteIs != this.router.url){
      this.elementRef.nativeElement.style.display = 'none';
    }else{
      this.elementRef.nativeElement.style.removeProperty("display") ;
    }
  }


  ngAfterViewInit(): void {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          if (event.url != this.showIfRouteIs) {
            this.elementRef.nativeElement.style.display = 'none';
          }else {
            this.elementRef.nativeElement.style.removeProperty("display") ;
          }
      }
    })
  }




}
