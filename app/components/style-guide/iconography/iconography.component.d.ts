import { OnInit } from '@angular/core';
export declare class IconographyComponent implements OnInit {
    icons: string[];
    query: string;
    filteredList: string[];
    ngOnInit(): void;
    filter(): void;
}
