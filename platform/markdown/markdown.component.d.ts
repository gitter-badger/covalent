import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
export declare class TdMarkdownComponent implements AfterViewInit {
    private renderer;
    content: ElementRef;
    constructor(renderer: Renderer);
    ngAfterViewInit(): void;
    render(contents: string): string;
}
