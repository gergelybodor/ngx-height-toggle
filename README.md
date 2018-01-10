# ngx-height-toggle - [Angular](http://angular.io/) directive to toggle the height of html elements to their content's height

[![npm version](https://badge.fury.io/js/ngx-height-toggle.svg)](https://badge.fury.io/js/ngx-height-toggle)

As of yet, there is no easy way to change the height of html elements from 0 to auto and back in angular. You can only go so far with css code. Even if you make it work, you might want to change the height when the element's content changes.
I faced these problems myself and decided to create this package, with which you can accomplish said things.

This implementation is far from being perfect, so if you find some bug please report it on github issues, thanks!

## Table of Contents

- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Developing](#developing)

## Demo

Check out the demo at https://bgolyoo.github.io/ngx-height-toggle

## Dependencies
* [Angular](https://angular.io) (tested with 5.1.1)

## Installation
After installing the above dependencies, install `ngx-height-toggle` via npm:
```shell
npm install --save ngx-height-toggle
```
or with yarn:
```shell
yarn add ngx-height-toggle
```
Once installed you need to import `HeightToggleModule` in your module where you'd like to use the directive:
```js
import { HeightToggleModule } from 'ngx-height-toggle';

@NgModule({
  declarations: [MyComponent, ...],
  imports: [HeightToggleModule, ...], 
})
export class MyModule {
}
```

## Usage

### Height change

You have to add the directive `ngxHeightToggle` to the element you want to toggle, and pass a variable telling it whether it should be expanded or collapsed.
```html
<div class="collapsible" ngxHeightToggle [open]="open">
    <p>some text</p>
</div>
```
When you toggle the height change the variable.
```js
export class MyComponent {

    public open = false;

    public toggle(): void {
        this.open = !this.open;
    }

}
```
The other important thing is you have to specify a transition and overflow for your element in css.
```css
.collapsible {
    overflow: hidden;
    transition: height 0.5s ease-out;
}
```

### Content change

If you want to adjust the element's height when its content changes, import `HeightToggleService` into your component and call its `contentChange` method after setting your content.
```html
<div class="collapsible" ngxHeightToggle [open]="open">
    <p>{{content}}</p>
</div>
``` 
```js
import { HeightToggleService } from 'ngx-height-toggle';

export class MyComponent {

    public open = false;
    public content = 'some text';
    
    constructor(private heightToggleService: HeightToggleService) { }

    public toggle(): void {
        this.open = !this.open;
    }

    public updateContent(): void {
        this.content = 'some other text';
        this.heightToggleService.contentChange();
    }

}
```

## Developing

If you want to work on this project, first you need to clone it from the github repository.

When that's done install dependencies via npm:
```shell
npm install
```
or if you have yarn installed:
```shell
yarn
```
To serve to application run the following:
```shell
ng serve --aot
```
