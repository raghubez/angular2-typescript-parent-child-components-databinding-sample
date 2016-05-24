import {Component, EventEmitter} from 'angular2/core';
import {ChildComponent} from './child.component'

@Component({
    selector: 'my-app',
    template: `
    	<div class="parent">
            <h1>Parent</h1>
            <p>Value from child component: {{childValue}}</p>
            <input type="text" #parentInput (keyup)="0"><br><br>
            <div class="child">
                <child [parentValue]="parentInput.value" (childChanged)="childValue = $event"></child>
                <br><br>
            </div>
            <br><br>
        </div>
        
    `,
    directives:[ChildComponent]
})

export class AppComponent {
	childValue:string;
}