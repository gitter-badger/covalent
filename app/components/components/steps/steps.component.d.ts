import { StepState, IStepChangeEvent } from '../../../../platform/core';
export declare class StepsDemoComponent {
    stepsAttrs: Object[];
    stepAttrs: Object[];
    stepChangeMsg: string;
    activeDeactiveStep1Msg: string;
    activeStep1: boolean;
    stateStep2: StepState;
    stateStep3: StepState;
    disabled: boolean;
    toggleActiveStep1(): void;
    toggleRequiredStep2(): void;
    toggleCompleteStep3(): void;
    stepChange(event: IStepChangeEvent): void;
    toggleDisabled(): void;
    activeStep1Event(): void;
    deactiveStep1Event(): void;
}
