import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDriective {
    @HostBinding('class.open') isOpen = false;

    constructor(private elementRef : ElementRef) {}
    //closing the downdown only when clicked on dropdown
    // @HostListener('click') toggleOpen1() {
    //     this.isOpen = !this.isOpen;
    // }

    //closing the dropdown by clicking anywhere on the page
    @HostListener('document:click', ['$event']) toggleOpen(event: Event){
        this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

}