import { ComponentResolver } from '@angular/core';
import { ApplicationRef, ViewContainerRef, TemplateRef } from '@angular/core';
import { LoadingType } from '../loading.component';
export interface ILoadingOptions {
    name: string;
    type?: LoadingType;
}
export declare class TdLoadingService {
    private _componentResolver;
    private _applicationRef;
    private _context;
    private _loadingSources;
    private _loadingObservables;
    constructor(_componentResolver: ComponentResolver, _applicationRef: ApplicationRef);
    /**
     * params:
     * - options: ILoadingOptions {
     *     name: string;
     *     type?: LoadingType;
     * }
     * - viewContainerRef: ViewContainerRef
     *
     * Creates an fullscreen loading mask and attaches it to the viewContainerRef.
     * Only displayed when the mask has a request registered on it.
     */
    createOverlayComponent(options: ILoadingOptions, viewContainerRef: ViewContainerRef): void;
    /**
     * params:
     * - options: ILoadingOptions {
     *     name: string;
     *     type?: LoadingType;
     * }
     * - viewContainerRef: ViewContainerRef
     * - templateRef: TemplateRef<Object>
     *
     * Creates an replace loading mask and attaches it to the viewContainerRef.
     * Replaces the templateRef with the mask when a request is registered on it.
     */
    createReplaceComponent(options: ILoadingOptions, viewContainerRef: ViewContainerRef, templateRef: TemplateRef<Object>): void;
    /**
     * params:
     * - name: string
     *
     * Resolves a request for the loading mask referenced by the name parameter.
     */
    register(name: string): void;
    /**
     * params:
     * - name: string
     *
     * Registers a request for the loading mask referenced by the name parameter.
     */
    resolve(name: string): void;
    /**
     * Creates a generic [TdLoadingComponent] and its context.
     * Returns a promise that resolves to a [ILoadingRef] with the created [ComponentRef] and its referenced [Observable].
     */
    private _createComponent(options);
    /**
     * Maps the [IInternalLoadingOptions] object to the [TdLoadingComponent] instance.
     */
    private _mapOptions(options, instance);
    /**
     * Creates an observable for the parameter name reference, and returns it.
     */
    private _registerLoadingComponent(name);
}
