import { ViewContainerRef } from '@angular/core';
import { TdLoadingService } from '../../../../platform/core';
export declare class LoadingDemoComponent {
    private _loadingService;
    demo: {
        name?: string;
        description?: string;
    };
    demo2: {
        name?: string;
        description?: string;
    };
    replaceRegistered: number;
    loadingAttrs: Object[];
    loadingServiceMethods: Object[];
    constructor(viewContainer: ViewContainerRef, _loadingService: TdLoadingService);
    registerCircleLoadingOverlay(): void;
    registerLinearLoadingOverlay(): void;
    registerLoadingReplace(): void;
    resolveLoadingReplace(): void;
}
