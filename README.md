# ngx-height-toggle - [Angular(2+)](http://angular.io/) directive to change the height of html elements to their content's height on toggle and on content change.

[![npm version](https://badge.fury.io/js/ngx-height-toggle.svg)](https://badge.fury.io/js/ngx-height-toggle)

## Table of Contents

- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Directive inputs](#directive-inputs)

## Demo

Check out the demo at https://stackblitz.com/edit/ngx-height-toggle-demo

## Dependencies

- @angular/common: ^5.1.0
- @angular/core: ^5.1.0
- rxjs: ^6.3.3

## Installation

Install `ngx-height-toggle` via npm:

```shell
npm install --save ngx-height-toggle
```

or with yarn:

```shell
yarn add ngx-height-toggle
```

Once installed you need to import `NgxHeightToggleModule` in your module where you'd like to use the directive:

```js
import { NgxHeightToggleModule } from 'ngx-height-toggle';

@NgModule({
  declarations: [MyComponent, ...],
  imports: [NgxHeightToggleModule, ...],
})
export class MyModule { }
```

## Usage

### Default Height change

You have to add the directive `ngxHeightToggle` to the element you want to toggle, and pass a variable telling it whether it should be expanded or collapsed.

```html
<div class="collapsible" ngxHeightToggle [open]="open">
    <p>some text</p>
</div>
```

When you want to toggle the height, change the variable.

```js
export class MyComponent {

    public open = false;

    public toggle(): void {
        this.open = !this.open;
    }

}
```

> The directive will automatically adjust the height when the content height changes.

### Collapsible in another collapsible

In case you want to include a collapsible inside another collapsible, you need to disable change detection for the wrapper collapsible directive.

## Directive inputs

| Input name               | Type    | Default value | Note                                                                                                                                                                                                                |
| ------------------------ | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| open                     | boolean | required      | Depending on the value the directive will close or open.                                                                                                                                                            |
| closedHeight             | number  | 0             | Specifies the height of closed state in pixels.                                                                                                                                                                     |
| transitionDuration       | number  | 500           | Standard css property for [translation-duration](https://www.w3schools.com/cssref/css3_pr_transition-duration.asp). Specify in ms.                                                                                  |
| transitionProperty       | string  | 'height'      | Standard css property for [transition-property](https://www.w3schools.com/cssref/css3_pr_transition-property.asp). Other than 'height', only option that makes sense is using 'all', if needed.                     |
| transitionTimingFunction | string  | 'linear'      | Standard css property for [transition-timing-function](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp).                                                                                    |
| transitionDelay          | number  | 0             | Standard css property for [transition-delay](https://www.w3schools.com/cssref/css3_pr_transition-delay.asp). Specify in ms.                                                                                         |
| enableChangeDetection    | boolean | true          | Use this input to turn off change detection. Unless disabled the directive will check the content height in every `AfterViewChecked` lifecycle hook and change the directive's height to the height of its content. |
