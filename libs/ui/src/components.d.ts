/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IconColor, IconSizes } from "./components/design-system/icon/icon.interface";
export namespace Components {
    interface DateSelector {
        "date": string;
    }
    interface TaskDateModal {
        "currentlySelectedDate": string;
    }
    interface TaskForm {
        "edit": boolean;
        "labels": Array<any>;
        "task": any;
    }
    interface TaskLabelModal {
        "currentlySelectedLabelIds": Array<any>;
        "labels": Array<any>;
    }
    interface TaskLabels {
        "labels": Array<any>;
        "selectedLabelIds": Array<any>;
    }
    interface TaskList {
        "labels": Array<any>;
        "tasks": Array<any>;
    }
    interface TdButton {
        "buttonText": string;
        "handler": Function;
        "iconName": string;
        "type": string;
    }
    interface TdDate {
        "date": string;
    }
    interface TdFooter {
        "last": string;
    }
    interface TdHeader {
        "headerCopy": string;
    }
    interface TdHeading {
        "headingText": string;
        "type": string;
    }
    interface TdLabel {
        "label": any;
    }
    interface TdLabels {
        "labels": Array<any>;
        "selectedLabels": Array<any>;
    }
    interface TdTask {
        "thumbnailUrl": string;
    }
    interface TdTaskDetails {
        "labels": Array<any>;
        "task": any;
    }
    interface TdText {
        "text": string;
        "type": string;
    }
    interface TdnUiIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        "color": IconColor;
        /**
          * If enabled, icon will be loaded lazily when it's visible in the viewport. Default, `false`.
         */
        "lazy": boolean;
        /**
          * Specifies which icon to use from the built-in set of icons.
         */
        "name"?: string;
        /**
          * The size of the icon: xxs through xl
         */
        "size"?: IconSizes;
    }
}
declare global {
    interface HTMLDateSelectorElement extends Components.DateSelector, HTMLStencilElement {
    }
    var HTMLDateSelectorElement: {
        prototype: HTMLDateSelectorElement;
        new (): HTMLDateSelectorElement;
    };
    interface HTMLTaskDateModalElement extends Components.TaskDateModal, HTMLStencilElement {
    }
    var HTMLTaskDateModalElement: {
        prototype: HTMLTaskDateModalElement;
        new (): HTMLTaskDateModalElement;
    };
    interface HTMLTaskFormElement extends Components.TaskForm, HTMLStencilElement {
    }
    var HTMLTaskFormElement: {
        prototype: HTMLTaskFormElement;
        new (): HTMLTaskFormElement;
    };
    interface HTMLTaskLabelModalElement extends Components.TaskLabelModal, HTMLStencilElement {
    }
    var HTMLTaskLabelModalElement: {
        prototype: HTMLTaskLabelModalElement;
        new (): HTMLTaskLabelModalElement;
    };
    interface HTMLTaskLabelsElement extends Components.TaskLabels, HTMLStencilElement {
    }
    var HTMLTaskLabelsElement: {
        prototype: HTMLTaskLabelsElement;
        new (): HTMLTaskLabelsElement;
    };
    interface HTMLTaskListElement extends Components.TaskList, HTMLStencilElement {
    }
    var HTMLTaskListElement: {
        prototype: HTMLTaskListElement;
        new (): HTMLTaskListElement;
    };
    interface HTMLTdButtonElement extends Components.TdButton, HTMLStencilElement {
    }
    var HTMLTdButtonElement: {
        prototype: HTMLTdButtonElement;
        new (): HTMLTdButtonElement;
    };
    interface HTMLTdDateElement extends Components.TdDate, HTMLStencilElement {
    }
    var HTMLTdDateElement: {
        prototype: HTMLTdDateElement;
        new (): HTMLTdDateElement;
    };
    interface HTMLTdFooterElement extends Components.TdFooter, HTMLStencilElement {
    }
    var HTMLTdFooterElement: {
        prototype: HTMLTdFooterElement;
        new (): HTMLTdFooterElement;
    };
    interface HTMLTdHeaderElement extends Components.TdHeader, HTMLStencilElement {
    }
    var HTMLTdHeaderElement: {
        prototype: HTMLTdHeaderElement;
        new (): HTMLTdHeaderElement;
    };
    interface HTMLTdHeadingElement extends Components.TdHeading, HTMLStencilElement {
    }
    var HTMLTdHeadingElement: {
        prototype: HTMLTdHeadingElement;
        new (): HTMLTdHeadingElement;
    };
    interface HTMLTdLabelElement extends Components.TdLabel, HTMLStencilElement {
    }
    var HTMLTdLabelElement: {
        prototype: HTMLTdLabelElement;
        new (): HTMLTdLabelElement;
    };
    interface HTMLTdLabelsElement extends Components.TdLabels, HTMLStencilElement {
    }
    var HTMLTdLabelsElement: {
        prototype: HTMLTdLabelsElement;
        new (): HTMLTdLabelsElement;
    };
    interface HTMLTdTaskElement extends Components.TdTask, HTMLStencilElement {
    }
    var HTMLTdTaskElement: {
        prototype: HTMLTdTaskElement;
        new (): HTMLTdTaskElement;
    };
    interface HTMLTdTaskDetailsElement extends Components.TdTaskDetails, HTMLStencilElement {
    }
    var HTMLTdTaskDetailsElement: {
        prototype: HTMLTdTaskDetailsElement;
        new (): HTMLTdTaskDetailsElement;
    };
    interface HTMLTdTextElement extends Components.TdText, HTMLStencilElement {
    }
    var HTMLTdTextElement: {
        prototype: HTMLTdTextElement;
        new (): HTMLTdTextElement;
    };
    interface HTMLTdnUiIconElement extends Components.TdnUiIcon, HTMLStencilElement {
    }
    var HTMLTdnUiIconElement: {
        prototype: HTMLTdnUiIconElement;
        new (): HTMLTdnUiIconElement;
    };
    interface HTMLElementTagNameMap {
        "date-selector": HTMLDateSelectorElement;
        "task-date-modal": HTMLTaskDateModalElement;
        "task-form": HTMLTaskFormElement;
        "task-label-modal": HTMLTaskLabelModalElement;
        "task-labels": HTMLTaskLabelsElement;
        "task-list": HTMLTaskListElement;
        "td-button": HTMLTdButtonElement;
        "td-date": HTMLTdDateElement;
        "td-footer": HTMLTdFooterElement;
        "td-header": HTMLTdHeaderElement;
        "td-heading": HTMLTdHeadingElement;
        "td-label": HTMLTdLabelElement;
        "td-labels": HTMLTdLabelsElement;
        "td-task": HTMLTdTaskElement;
        "td-task-details": HTMLTdTaskDetailsElement;
        "td-text": HTMLTdTextElement;
        "tdn-ui-icon": HTMLTdnUiIconElement;
    }
}
declare namespace LocalJSX {
    interface DateSelector {
        "date"?: string;
    }
    interface TaskDateModal {
        "currentlySelectedDate"?: string;
        "onDateSelection"?: (event: CustomEvent<any>) => void;
        "onModalClose"?: (event: CustomEvent<any>) => void;
    }
    interface TaskForm {
        "edit"?: boolean;
        "labels"?: Array<any>;
        "onTaskCancelled"?: (event: CustomEvent<any>) => void;
        "onTaskChanged"?: (event: CustomEvent<any>) => void;
        "onTaskDeleted"?: (event: CustomEvent<any>) => void;
        "task"?: any;
    }
    interface TaskLabelModal {
        "currentlySelectedLabelIds"?: Array<any>;
        "labels"?: Array<any>;
        "onLabelSelection"?: (event: CustomEvent<any>) => void;
        "onModalClose"?: (event: CustomEvent<any>) => void;
    }
    interface TaskLabels {
        "labels"?: Array<any>;
        "onTaskLabelsSelected"?: (event: CustomEvent<any>) => void;
        "selectedLabelIds"?: Array<any>;
    }
    interface TaskList {
        "labels"?: Array<any>;
        "onTaskSelected"?: (event: CustomEvent<any>) => void;
        "tasks"?: Array<any>;
    }
    interface TdButton {
        "buttonText"?: string;
        "handler"?: Function;
        "iconName"?: string;
        "onTdButtonClicked"?: (event: CustomEvent<any>) => void;
        "type"?: string;
    }
    interface TdDate {
        "date"?: string;
    }
    interface TdFooter {
        "last"?: string;
    }
    interface TdHeader {
        "headerCopy"?: string;
        "onGoHome"?: (event: CustomEvent<any>) => void;
    }
    interface TdHeading {
        "headingText"?: string;
        "type"?: string;
    }
    interface TdLabel {
        "label"?: any;
    }
    interface TdLabels {
        "labels"?: Array<any>;
        "selectedLabels"?: Array<any>;
    }
    interface TdTask {
        "thumbnailUrl"?: string;
    }
    interface TdTaskDetails {
        "labels"?: Array<any>;
        "onTaskEdit"?: (event: CustomEvent<any>) => void;
        "onTaskMarkedComplete"?: (event: CustomEvent<any>) => void;
        "task"?: any;
    }
    interface TdText {
        "text"?: string;
        "type"?: string;
    }
    interface TdnUiIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        "color"?: IconColor;
        /**
          * If enabled, icon will be loaded lazily when it's visible in the viewport. Default, `false`.
         */
        "lazy"?: boolean;
        /**
          * Specifies which icon to use from the built-in set of icons.
         */
        "name"?: string;
        /**
          * The size of the icon: xxs through xl
         */
        "size"?: IconSizes;
    }
    interface IntrinsicElements {
        "date-selector": DateSelector;
        "task-date-modal": TaskDateModal;
        "task-form": TaskForm;
        "task-label-modal": TaskLabelModal;
        "task-labels": TaskLabels;
        "task-list": TaskList;
        "td-button": TdButton;
        "td-date": TdDate;
        "td-footer": TdFooter;
        "td-header": TdHeader;
        "td-heading": TdHeading;
        "td-label": TdLabel;
        "td-labels": TdLabels;
        "td-task": TdTask;
        "td-task-details": TdTaskDetails;
        "td-text": TdText;
        "tdn-ui-icon": TdnUiIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "date-selector": LocalJSX.DateSelector & JSXBase.HTMLAttributes<HTMLDateSelectorElement>;
            "task-date-modal": LocalJSX.TaskDateModal & JSXBase.HTMLAttributes<HTMLTaskDateModalElement>;
            "task-form": LocalJSX.TaskForm & JSXBase.HTMLAttributes<HTMLTaskFormElement>;
            "task-label-modal": LocalJSX.TaskLabelModal & JSXBase.HTMLAttributes<HTMLTaskLabelModalElement>;
            "task-labels": LocalJSX.TaskLabels & JSXBase.HTMLAttributes<HTMLTaskLabelsElement>;
            "task-list": LocalJSX.TaskList & JSXBase.HTMLAttributes<HTMLTaskListElement>;
            "td-button": LocalJSX.TdButton & JSXBase.HTMLAttributes<HTMLTdButtonElement>;
            "td-date": LocalJSX.TdDate & JSXBase.HTMLAttributes<HTMLTdDateElement>;
            "td-footer": LocalJSX.TdFooter & JSXBase.HTMLAttributes<HTMLTdFooterElement>;
            "td-header": LocalJSX.TdHeader & JSXBase.HTMLAttributes<HTMLTdHeaderElement>;
            "td-heading": LocalJSX.TdHeading & JSXBase.HTMLAttributes<HTMLTdHeadingElement>;
            "td-label": LocalJSX.TdLabel & JSXBase.HTMLAttributes<HTMLTdLabelElement>;
            "td-labels": LocalJSX.TdLabels & JSXBase.HTMLAttributes<HTMLTdLabelsElement>;
            "td-task": LocalJSX.TdTask & JSXBase.HTMLAttributes<HTMLTdTaskElement>;
            "td-task-details": LocalJSX.TdTaskDetails & JSXBase.HTMLAttributes<HTMLTdTaskDetailsElement>;
            "td-text": LocalJSX.TdText & JSXBase.HTMLAttributes<HTMLTdTextElement>;
            "tdn-ui-icon": LocalJSX.TdnUiIcon & JSXBase.HTMLAttributes<HTMLTdnUiIconElement>;
        }
    }
}
