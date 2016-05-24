import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'child',
    template: `
            <h1>Child</h1>
            <p>Value from parent component: {{parentValue}}</p>
            <input type="text" #childInput (keyup)="onChange(childInput.value)"><br>
        
    `,
    inputs: ['parentValue'],
    outputs: ['childChanged']
})

export class ChildComponent {
	parentValue: string;

    childChanged = new EventEmitter<string>();

    onChange(value: string){
        this.childChanged.emit(value);
    }


}