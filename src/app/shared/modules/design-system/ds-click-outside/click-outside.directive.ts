import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';

@Directive({
    selector: '[dsClickOutside]'
})
export class DS_ClickOutsideDirective implements OnDestroy {

    @Output() dsClickOutside = new EventEmitter<void>();

    constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
        this.document.addEventListener('click', this.onClick, true);
    }

    ngOnDestroy(): void {
        this.document.removeEventListener('click', this.onClick, true);
    }

    public onClick = (event: MouseEvent) => {
        const clickedInside = this.elementRef.nativeElement.contains(event.target) || // Check if clicked inside
            this.document.querySelector('.cdk-overlay-container')?.contains(event.target as Node); // Check if overlay on top of element exists
        if (!clickedInside) {
            this.dsClickOutside.emit();
        }
    }
}
